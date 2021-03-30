const router = require('express').Router();
const favMovieRoutes = require('./favMovieRoutes');

router.use('/favmovie', favMovieRoutes);
module.exports = router;
