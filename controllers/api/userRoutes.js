const router = require('express').Router();
const { User } = require('../../models');
const { sequelize } = require('../../models/user');
const { route } = require('../homeroutes');

router.post('/login', async (req, res) => {

    try{
        const userData = await User.findOne({ where: { email: req.body.email }});

        //if username is incorrect
        if (!userData) {

          Toastify({
            text: "Incorrect email or password, please try again",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            className: "Incorrect Login Toast",
            gravity: "top",
            position: "center"
          }).showToast();

            res 
                .status(400)
                .json({ message: "Incorrect email or password, please try again."});
                return;
        }

        const validPassword = await userData.checkPw(req.body.password);

       //if password is incorrect 
        if (!validPassword) {

          Toastify({
            text: "Incorrect email or password, please try again",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            className: "Incorrect Login Toast",
            gravity: "top",
            position: "center"
          }).showToast();

            res
                .status(400)
                .json({message: 'Incorrect email or password, please try again'});
                return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id ;
            req.session.logged_in = true; 
            res.json({ user: userData, message: 'You are now logged in!' });

            return res.redirect('/profile');
            
        });
        
    }  catch (err) {
    res.status(400).json(err);
  }
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



// get fav movie genre wip lucas 
// router.get('/profile', async (req,res)=>{
//   const userData = await User.findOne({ where: { id: req.body }});
//   // console.log(userData);
//   console.log(userData)
//   return userData.json()
// })


router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    req.session.save(() => {
      res.status(200).json(newUser);
      return res;
    });
  } catch (err) {
    res.status(400).json(err);
  }

});

  module.exports = router;
  