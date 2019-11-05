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

router.get('/deleteMsg', async (req,res) => {
    try {
        let Room = await RoomChatModel.find().populate('message.users');
        let newRoom = await Room[0].message.filter((value) => {
           
            if(value.users != null)
            {
                return {users : value.users._id,msg : value.msg,dateSent : value.dateSent}
            }
        })
        let addUserInRoom = await RoomChatModel.findByIdAndUpdate('5dc1c2cbf6e99a16f00ed885',{
            message : newRoom
        })
        console.log(addUserInRoom)
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