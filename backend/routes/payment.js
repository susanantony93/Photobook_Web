var express = require('express');
var router = express.Router();

var config = require('./../config');
var Payment = require('../models/payment');

router.post('/user/payment', async (req, res) => {
    console.log('\n req body : ', req.body)
    var schema = {
        'photographer_name': {
            notEmpty: true,
            //errorMessage: "Name is required"
        },
        'rate': {
            notEmpty: true,
            //errorMessage: "Email is required"
        },
        'hours': {
            notEmpty: true,
            //errorMessage: "Password is required"
        },
        'total': {
            notEmpty: true,
            //errorMessage: "Password is required"
        },
        'name': {
            notEmpty: true,
            errorMessage: "Name on Card is required"
        },
        'cardnumber': {
            notEmpty: true,
            errorMessage: "Card Number is required"
        },
        'address': {
            notEmpty: true,
            errorMessage: "Address is required"
        },
        'expiry': {
            notEmpty: true,
            errorMessage: "Expiry Date is required"
        },
        'CVC': {
            notEmpty: true,
            errorMessage: "CVC is required"
        }
    };

    req.checkBody(schema);
    var errors = req.validationErrors();
    console.log('\n Err : ', errors);
    if (!errors) {
        var paymentModel = new Payment(req.body);
        paymentModel.save((err, paymentData) => {
            paymentData = JSON.parse(JSON.stringify(paymentData));
            console.log("data:", paymentData);
            if (err) {
                res.status(config.BAD_REQUEST).json({
                    status: 'failed',
                    message: "could not make the payment"
                });
            } else {
                var result = {
                    status: 'success',
                    message: "Payment successful.",
                    data: { payment: paymentData }
                };
                res.status(config.OK_STATUS).json(result);
            }
        })

    }else{
        var result = {
            status: 'failed',
            message: "Error in request",
            data: { err: errors }
        };
        res.status(config.BAD_REQUEST).json(result);
    }
});

module.exports = router;