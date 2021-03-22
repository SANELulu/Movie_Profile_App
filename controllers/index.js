const router = require('express').Router();
const viewRoutes = require('./view-routes');

router.use('/', viewRoutes);

module.exports = router;