const mongoose = require('../database');

const DogSchema = new mongoose.Schema({

    _id:Number,
    nome:{
        type:String,
        require:true,
    },
    sobrenome:{
        type:String,
        require:true,
    },
    telefone:{
        type:String,
        require:true,
    },
    seguidores:{
        type:String,
        require:true,
    },
    projetos: {
        type:String,
        required:true,
       
    },
    seguidos:{
        type: String,
        required: true,
       
    },
    cidade:{
        type:String,
        required:true,
    },
     estado:{
        type:String,
        required:true,
    },
    fotoUrl:{
        type:String,
        required:true,
    }

});

const Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog;