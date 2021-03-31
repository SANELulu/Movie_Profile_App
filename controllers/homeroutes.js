const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    })
});

router.get( '/login', async (req, res)  => {
  debugger;
    // If the user is already logged in, redirect the request to another route
    
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
    res.render('login');
  });
router.get('/profile', async (req, res) => {
  res.render('profile', {
    loggedIn: req.session.loggedIn
  }); 
});



module.exports = router;