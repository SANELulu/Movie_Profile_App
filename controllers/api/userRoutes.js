const router = require('express').Router();
const { User } = require('../../models');
const { sequelize } = require('../../models/user');
const { route } = require('../homeRoutes');

router.post('/login', async (req, res) => {
  //   try{
  //       const userData = await User.findOne({ where: { email: req.body.email }});

  //       if (!userData) {
  //           res 
  //               .status(400)
  //               .json({ message: "Incorrect email or password, please try again."});
  //               return;
  //       }

  //       const validPassword = await userData.checkPw(req.body.password);
        
  //       if (!validPassword) {
  //           res
  //               .status(400)
  //               .json({message: 'Incorrect email or password, please try again'});
  //               return;
  //       }
        
  //       req.session.save(() => {
  //           req.session.user_id = userData.id ;
  //           req.session.logged_in = true; 
  //           res.json({ user: userData, message: 'You are now logged in!' });

  //           return res.redirect('/profile');
            
  //       });
        
  //   }  catch (err) {
  //   res.status(400).json(err);
  // }
   res.redirect('/profile');
});

router.get('/logout', (req, res) => {
  
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    req.session.save(() => {
      // req.session.logged_in = true;
      res.status(200).json(newUser);
      return res;
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/profile', async (req, res) => {
  
})

  module.exports = router;
  