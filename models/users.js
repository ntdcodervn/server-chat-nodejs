const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    name: {
        type: 'string',
        required: true
    }
});


module.exports = mongoose.model('users', schema);