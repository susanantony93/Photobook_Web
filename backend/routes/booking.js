// author Lakshmi Narayana lk720991@dal.ca 
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const booking = require('../models/booking');

//Reference: https://nodejs.org/en/docs/guides/simple-profiling/
//https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

router.post('/', (req, res, next) => {
    console.log(req.body);
    //final booking intialization and declaration
    const finalbooking = new booking({
        _id: new mongoose.Types.ObjectId(),
        photographerDetails: req.body.photographerdetails,
        rate: req.body.rate,
        eventType: req.body.eventType,
        eventDate: req.body.eventDate,
        address: req.body.eventAddress,
        status:"pending"
    });
    //saving information using finalbooking function 
    finalbooking.save().then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to bookings',
    });//error message call
});
//function is used to find data in db
router.get('/',(req,res,next)=>{
    booking.find()
    .exec()
    .then(docs =>{
        res.status(200).json(docs);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
//function is used to update data in db
router.post('/update', (req, res, next) =>{
    booking.findByIdAndUpdate( req.body.id, {
        _id: req.body.id,
        status: req.body.status
    }).then( result=>{
        console.log(result);
        res.status(200).json({
            message: "Update successfull!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;