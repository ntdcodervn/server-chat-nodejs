const express = require('express');
const router = express.Router();
const userModel = require('../../models/users');
const RoomChatModel = require('../../models/roomchats');

router.get('/listUser', async (req,res) => {
    res.json({data : await userModel.find().populate('user')})
})

router.post('/addUser', async (req,res) => {
    try {
       
        let userAdd = new userModel({name : "Văn huy"});
        let userCheck = userAdd.save();
        if(userCheck){
           
            return res.json({msg : 'Thêm user thành công', status : 200});
        }
        else {
            return res.json({msg : 'Thêm user thất bại', status : 201})
        }
    } catch (error) {
        console.log(error);
        res.json({msg : 'Server errors', status : 501})
    }
})

router.post('/addMsg', async (req,res) => {
    try {
        let {id,msg} = req.body;
        let findRooms = await RoomChatModel.findById('5dc1c2cbf6e99a16f00ed885');
        let addUserInRoom = await RoomChatModel.findByIdAndUpdate('5dc1c2cbf6e99a16f00ed885',{
            message : [...findRooms.message,{users : id,msg : msg,dateSent : new Date()}]
        })

        
        res.send(addUserInRoom);
    } catch (error) {
        console.log(error);
        res.json({msg : "server error"})
    }
})
module.exports = router;