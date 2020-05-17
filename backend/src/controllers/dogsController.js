const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Dog = require('../models/Dog');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
   
    try{
        const dogs = await Dog.find();

        return res.send({ dogs });
    }
    catch(error){
        return res.status(400).send({ error: 'Error loading dogs'});
    }
});

router.get('/:dogId', async (req, res) => {
    try{
        const dog = await Dog.findById(req.params.dogId);

        return res.send( dog );
    }
    catch(error){
        return res.status(400).send({ error: 'Error loading dog'});
    }
});

router.post('/', async (req, res) => {
    try {
        const dog = await Dog.create(req.body);

        return res.send({ dog });
    }
    catch (error) {
        return res.status(400).send({ error: 'Error creating new register'});
    }
});


module.exports = app => app.use('/dogs', router);