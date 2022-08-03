const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//add this onto the /api for the site
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
