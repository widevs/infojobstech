const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const openAIService = require('../services/openAIService');
const inf = require('../services/infojobsService');        


const offerSchema = new Schema({
    id: { type: String,required:true },
    title: { type: String, required: true },
    requirementMin:{ type: String},    
    description: { type:String},
    stack:{type:String},
    skills:{type: Array}

},{
    timestamps: true,
    strict: false 
});



/**
 * Upsert (update or insert) an array of offers.
 * 
 * @static
 * @async
 * @param {Array} offers - The array of offer objects to upsert.
 * @returns {Promise<Object|null>} The result of the last save operation, or null if no offers were saved.
 * @throws {Error} If there is an error in getting the detailed offer, processing the offer with AI, or saving the offer.
 */

offerSchema.statics.upsert = async (offers) => {
    let result;
    for (const offer of offers) {
        const existingOffer = await Offer.findOne({ id: offer.id });
        if (!existingOffer) {   
            
            //1st: we get the detailed offer 
            let detailed_offer = await inf.getDetailedOfferById(offer);
            
            //2nd: we process the offer with AI Service, where new properties are added
            detailed_offer = detailed_offer ? await Offer.processOfferWithAI(detailed_offer) : detailed_offer;

            //3rd: we save offer to DB.
            if (detailed_offer && detailed_offer.stack) {
                const newOffer = new Offer(detailed_offer);
                result = await newOffer.save();  
            }        
       }
    }

    return (result || null);
}



/**
 * Process an offer object with AI.
 * 
 * This function takes an offer object and adds extra properties to it using an AI service. 
 *
 * @static
 * @async
 * @param {Object} offer - The offer object to process.
 * @returns {Promise<Object|number>} The processed offer object, or 0 if the offer or its stack is undefined.
 * @throws {Error} If there is an error in processing the offer with AI.
 */

offerSchema.statics.processOfferWithAI = async (offer) => {
        offer =  await openAIService.addExtraProperties(offer);
        if (offer!=undefined && offer.stack!=undefined) {
            offer.stack = Offer.getStringfromStackId(offer.stack);
            return offer;
        } else {
            return 0;
        }
}



/**
 * Simplify an offer object.
 *
 * @static
 * @param {Object} offer - The offer object to simplify.
 * @returns {Object} A simplified offer object.
 */

offerSchema.statics.simplifyOffer = (offer) => {
    let simplified_offer = {
        _id: offer._id,
        id: offer.id,
        title: offer.title,
        company: offer.profile.name,
        city: offer.city,
        stack: offer.stack,
        skills: offer.skills,
        url: offer.link,
        createdAt: offer.createdAt,
        updatedAt: offer.updatedAt,
        modality: offer.teleworking.id
      };

      let minSalary = offer.minPay!= undefined ? offer.minPay.amount : 0;
      let maxSalary = offer.minPay!= undefined ? offer.maxPay.amount : 0;
      if (minSalary > 0 ) simplified_offer.min_salary = minSalary;
      if (maxSalary > 0 ) simplified_offer.max_salary = maxSalary;
    
      return simplified_offer;
}



/**
 * Get statistics for a specific technology stack.
 * 
 * @static
 * @async
 * @param {string} stack_string - The technology stack to get statistics for.
 */

offerSchema.statics.getStackStatistics = async (stack_string) => {
    let offers = await Offer.find({stack:stack_string});
   
    
    let skillsList = offers.reduce((skills, offer) => {
        if (!skills[offer.stack]) {
            skills[offer.stack] = {};
        }

        offer.skills.forEach(skill => {
            if (!skills[offer.stack][skill]) {
                skills[offer.stack][skill] = 0;
            }
        skills[offer.stack][skill]++;
        });
        return skills;
    }, {});
       
    let skills_object = skillsList[stack_string];   
    let entries = Object.entries(skills_object);
    entries.sort((a, b) => b[1] - a[1]);
    let skills_object_sorted = Object.fromEntries(entries);

    return skills_object_sorted;
}



offerSchema.statics.getStringfromStackId =  (number) => {
    let classificationObj = {
        1: "frontend",
        2: "backend",
        3: "fullstack",
        4: "data",
        5: "devops",
        6: "mobile",
        7: "otro"
    };
    return classificationObj[number] || null;
}


const Offer = mongoose.model('offer', offerSchema);


module.exports = Offer;