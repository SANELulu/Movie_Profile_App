const router = require('express').Router();
const {  User, favMovie } = require('../models');
const withAuth = require('../utils/auth');
console.log("homeRoutes.js hitting")

router.get('/', (req, res) => {
    res.render('homepage')
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

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: {
        model: favMovie,
      }
      
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
