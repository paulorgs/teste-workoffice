const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Cat = require('../models/Cat');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
   
    try{
        const cats = await Cat.find();

        return res.send({ cats });
    }
    catch(error){
        return res.status(400).send({ error: 'Error loading cats'});
    }
});

router.get('/:catId', async (req, res) => {
    try{
        const cat = await Cat.findById(req.params.catId);

        return res.send({ cat });
    }
    catch(error){
        return res.status(400).send({ error: 'Error loading cat'});
    }
});

router.post('/', async (req, res) => {
    try {
        const cat = await Cat.create(req.body);

        return res.send({ cat });
    }
    catch (error) {
        return res.status(400).send({ error: 'Error creating new register'});
    }
});


module.exports = app => app.use('/cats', router);