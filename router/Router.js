const router = require('express').Router();

const Item = require('../models/todo');




router.get('/', async (req, res) => {
    try {
        const store = await Item.find({});

        res.render('items', { store })

    } catch (error) {
        console.log(error);
    }


})


//post....

router.post('/', async (req, res) => {
    try {
        const { item } = req.body;

        await Item.create({ name: item })
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

});



//delete ...

router.post('/delete', async (req, res) => {
    try {
        const id = req.body.check;
        await Item.deleteOne({ where: { _id: id } });
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

})







module.exports = router;