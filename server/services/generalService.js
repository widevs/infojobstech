const Offer = require('../models/offer.model');
const inf = require('./infojobsService');

const databasefeed = async () =>  {
    let result;
    const ofertas = await inf.getITOffers();
    result= await Offer.upsert(ofertas);
    return (result || null)
}

module.exports.databasefeed = databasefeed;
