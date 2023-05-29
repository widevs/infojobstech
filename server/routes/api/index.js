//API routes
const router = require('express').Router();

router.use('/offers', require('./offers.route'));

module.exports = router;