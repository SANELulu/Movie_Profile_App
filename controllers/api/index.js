// these are going to be the routes that render your frontend with handlebars
const router = require('express').Router()
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

// homeRoute delineated by get /
router.get('/',async(req,res)=>{
  // this route wil grab all of the projects from the db and then it will render
  // a handle bars homepage
})
// profile page by get /profile
// this route needs the auth-check middleware to prevent non authed users from landing here
router.get('/profile',async(req,res)=>{
    // render the handlebars page that has the form to create a new project
})

// // login page by get /login
// router.get('/login',async(req,res)=>{
//   // render the page with signup/login form
//   // if (req.session.logged_in) {
//   //   res.redirect('/profile');
//   //   return;
//   // }

//   res.render('login');

// })


module.exports = router;

