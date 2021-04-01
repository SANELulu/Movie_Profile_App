const router = require('express').Router();
router.post('/', (req, res) => {
    console.log(req.body);
})

router.get('/profile', (req, res) =>{
    console.log(req.body);
    return res;
})

module.exports = router;
