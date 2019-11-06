const mongoose = require('mongoose');
var schema = new mongoose.Schema(
    {
     nameRoom : {
         type : 'string',
         required : true
     }, 
     message : [{
         users : {
             type : mongoose.Schema.Types.ObjectId , 
             ref: 'users'
        },
         msg : "string",
         dateSent : "date" 
     }]
});

module.exports = mongoose.model('roomchats', schema);