const router = require('express').Router();
const Offer = require('../../models/offer.model');




/**
 * GET /offers
 * 
 * This route retrieves all offers from the database, simplifies them, and sends them in the response (sorted by newest first).
 */
router.get('/', async (req, res,next) => {
    try {
        const offers = await Offer.find().sort('-_id');
        simplified_offers = offers.map(offer => Offer.simplifyOffer(offer));
        res.json(simplified_offers);
    } catch (error) {
        next(error);
    }    
});


/**
 * GET /:offerId
 */
router.get('/:offerId', async (req,res,next) => {
    try {
        const offers = await Offer.find({id:req.params.offerId});
        if (offers.length > 0) {
            res.json(offers[0]);
          } else {
            res.status(404).json({ error: "La oferta no fue encontrada" });
          }
    } catch (error) {
        next(error);
    }        
});


/**
 * GET /stack/:stack
 */
router.get('/stack/:stack', async (req,res,next) => {
    try {
       res.json(await Offer.getStackStatistics(req.params.stack));
    } catch(e) {
        next(e);
    }
});



module.exports = router;