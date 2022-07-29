// for performing user database operations
const express = require('express');
const { findOne } = require('../models/Usermodel');
const router = express.Router();

// importing user model
const Model = require('../models/Usermodel')

// req for request and res for response
router.post('/add',(req,res)=>{
    console.log(req.body);
    // res.send('Add user request');

    // asyc function
    new Model(req.body).save()
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((err)=>{
        connsole.log(err);
        res.status(500).json(err);
    });

})

router.get('/getall',(req,res)=>{
    Model.find({})
    .then((result)=>{
        res.json(result);

    })
    .catch((err)=>{
        console.error(err);
        res.status(500).json(err);
    })
})

router.post('/authenticate' , (req,res) => {
    const formdata = req.body;
    Model.findOne({email: formdata.email, password: formdata.password})
    .then((result) => {
        console.log(result);
        if(result){
            console.log('login success');
            res.json(result);
        }
        else{
            console.log('login failed');
            res.status(400),json({messsage: 'login failed'});
        }
    })

        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    });
// colon(:) shows that it is a parameter

module.exports = router;
