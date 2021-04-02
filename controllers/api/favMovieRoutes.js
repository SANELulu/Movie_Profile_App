
const router = require('express').Router();
const { favMovie } = require('../../models/')
const withAuth = require('../../utils/helpers');

router.post('/', withAuth, async (req, res) => {
    try{
        const newFavMovie = await favMovie.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newFavMovie);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try{
        const favMovieData = await favMovie.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if(!favMovieData) {
            res.status(404).json({ message: 'No data found here!'});
            return;
        }
    } catch (err) {
        res.status(500) (err);
    }
})

router.post('/addfav', async (req, res) => {
    try {
        console.log("added fav movie")
        const newFavMovie = await favMovie.create(req.body);
        req.session.save(() => {
            res.status(200).json(newFavMovie);
            return res;
          });
        } catch (err) {
          res.status(400).json(err);
        }
});
module.exports = router;