async function getITOffers()  {
    const url_ofertas = 'https://api.infojobs.net/api/9/offer?category=informatica-telecomunicaciones&maxResults=50';
    const headers = {
        'Authorization': `Basic ${process.env.API_KEY}`,
      };

    const response = await fetch(url_ofertas, {headers});
    const ofertas_raw = await response.json();
    
    return ofertas_raw.items;
}



const getDetailedOfferById = async (offer) => {
  const url_oferta = 'https://api.infojobs.net/api/9/offer/'+offer.id;
  const headers = {
      'Authorization': `Basic ${process.env.API_KEY}`,
    };

  const response = await fetch(url_oferta, {headers});
  const detailed_offer = await response.json();
  
  return detailed_offer;

}


module.exports = {
    getITOffers,
    getDetailedOfferById
}