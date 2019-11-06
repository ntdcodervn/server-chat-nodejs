const express = require('express');
const router = express.Router();
const iconsModel = require('./../../models/icons');


router.get('/getAllIcons', async (req,res) => {
    res.json({data : await iconsModel.find()});
})

module.exports = router;