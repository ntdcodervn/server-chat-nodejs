const express = require('express');
const router = express.Router();
const RoomChatModel = require('../../models/roomchats');

router.get('/ListRoomChat', async (req,res) => {
    try {
       res.json({data : await RoomChatModel.find().populate('message.users')});
    } catch (error) {
        console.log(error)
        res.json({msg : 'ServerError'})
    }
})

router.get('/getRoomChatById', async (req,res) => {
    try {
       res.json({data : await RoomChatModel.findById(req.query.id).populate('message.users')});
    } catch (error) {
        console.log(error)
        res.json({msg : 'ServerError'})
    }
})

router.get('/addRoom', async (req,res) => {
    try {
       let room = new RoomChatModel({
           nameRoom : "CHAT01",
           message : [
               {
                users : "5dc1ba92e80b2a1513971e54",
                msg : "Hello Wolrd",
                dateSent : '11-11-2019'
               }

           ]
       })
       let check = await room.save();
       console.log(check);
    } catch (error) {
        console.log(error)
        res.json({msg : 'ServerError'})
    }
})


module.exports = router;