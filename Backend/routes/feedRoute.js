const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Feed=require('../models/feedModel');

router.get('/feedinfo',async(req,res)=>{
    try{
        const feed=await Feed.find();
    res.json(feed);
    }catch(error){
        res.json({message:error.message});}
});
router.post('/feedpost', async(req,res)=>{
    const {name,email,message}=req.body;
    try {
        const feed=new Feed({
            name,email,message
        })
        await feed.save();
        res.json(feed);

    } catch (error) {
        res.json({message:error.message});
    }
})

module.exports=router;