const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    _id:Number,
    nome:{
        type:String,
        require:true,
    },
    sobrenome:{
        type:String,
        require:true,
    },
    cidade:{
        type:String,
        require:true,
    },
    estado:{
        type:String,
        require:true,
    },
    email: {
        type:String,
        unique: true,
        required:true,
        lowercase: true,
    },
    senha:{
        type: String,
        required: true,
        select: false,
    },
    fotoUrl:{
        type:String,
        required:true,
    }

});

UserSchema.pre('save', async function(next){
    const hash =  await bcrypt.hash(this.senha, 10);
    this.senha = hash;


    next();
})

const User  = mongoose.model('User', UserSchema);

module.exports = User; 