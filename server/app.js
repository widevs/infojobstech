const express = require('express');
const cors = require('cors');
const app = express();
const cron = require('node-cron');


// Express Configuration
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(cors());
app.use('/docs', express.static('docs'));
app.use('/',require('./routes'));

// Error handling
const errorHandler = require('./middleware/errorHandler'); 
app.use(errorHandler);


// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Initializing cron jobs
const job = require('./cronJobs');

module.exports = app;
module.exports.feedingJob = job;