const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Offer = require('../../models/offer.model');

require('dotenv').config();

describe('Pruebas sobre la API de ofertas', () => {

    beforeAll( async () => {
        await mongoose.connect(process.env.DB_URL);
    });

    afterAll( async () => {
        app.feedingJob.stop(); //stopping cron
        await mongoose.disconnect();
    });


    describe('GET /api/offers', () => {
        
        let response;
        beforeEach( async () => {
            response = await request(app).get('/api/offers').send();
        });

        it('should return a 200 resopone', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('should return an array of offers', async () =>{
            expect(response.body).toBeInstanceOf(Array);
        })

    });



    describe('GET /api/offers/:offerId', () => {
        let offer;
        let response;
        
        beforeEach( async () => {
            offer = await Offer.create({id:'inventedidfrominfojobs',title:'sample offer', description:'just a test', category:'fullstack'});
            response = await request(app).get(`/api/offers/inventedidfrominfojobs`).send();
            
        });
        afterEach( async () => {
            await Offer.findByIdAndDelete(offer._id);
        });

        it('should return status 200 response and a response in json format', () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('should return the offer requested', () => {
            expect(response.body._id).toBe(offer._id.toString());
        });

    })

});