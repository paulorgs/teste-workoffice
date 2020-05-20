const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://teste:teste@cluster0-ilurt.mongodb.net/bdrest?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise  = global.Promise;

module.exports = mongoose;