// these are going to be the routes that render your frontend with handlebars
const router = require('express').Router()
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
router.use('/users', userRoutes);
router.use('/movie', movieRoutes);

module.exports = router;

