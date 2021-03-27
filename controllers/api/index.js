// these are going to be the routes that render your frontend with handlebars
const router = require('express').Router()
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);


module.exports = router;

