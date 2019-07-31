var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var config = require('./../config');

var User = require('./../models/users');


router.post('/user/sign-up', async (req, res) => {
    console.log('\n req body : ', req.body)
    var schema = {
        'name': {
            notEmpty: true,
            errorMessage: "Name is required"
        },
        'email': {
            notEmpty: true,
            errorMessage: "Email is required"
        },
        'password': {
            notEmpty: true,
            errorMessage: "Password is required"
        },
        'user_role': {
            notEmpty: true,
            errorMessage: "user_role is required"
        }
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    console.log('\n Err : ', errors);
    if (!errors) {
        var usercheck = await User.findOne({ email: req.body.email, isDeleted: false, user_role: req.body.user_role });
        console.log('usercheck====>', usercheck);
        if (usercheck) {
            res.status(config.OK_STATUS).json({
                status: 'failed',
                message: "Email is already exist!!"
            });
        } else {
            var userModel = new User(req.body);
            userModel.save((err, userData) => {
                userData = JSON.parse(JSON.stringify(userData));
                console.log("data:", userData);
                if (err) {
                    res.status(config.BAD_REQUEST).json({
                        status: 'failed',
                        message: "could not register user please try again!!"
                    });
                } else {
                    delete userData.password;
                    delete userData.isDeleted;

                    var result = {
                        status: 'success',
                        message: "User registered successfully.",
                        data: userData
                    };
                    res.status(config.OK_STATUS).json(result);
                }
            });
        }
    } else {
        res.status(config.BAD_REQUEST).json({
            status: 'failed',
            message: "Validation Error",
            errors
        });
    }

});

//route for logging in a user
router.post('/login', async (req, res, next) => {
    User.findOne(
        { email: req.body.username, isDeleted: false },
        function (err, user) {
            if (err) throw err;
            if (user) {

                // ---------- IF ENCRYPTION ------------------
                if (bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
                    if (err) throw err;
                    res.json(user);
                }));

                // ----------- IF NO ENCRYPTION -------------------------
                /*var passwordCompare = user.password;
                if (passwordCompare === req.body.password) {
                    res.json(user)
                } */
                /* else {
                     res.status(404).send("Invalid login info.");
                 }*/
            } else {
                console.log(req.body);
                res.status(404).send("Invalid login info")
            }
        }
    )

})

//route for updating a user
router.post('/updateUser', async (req, res, next) => {


    User.findOneAndUpdate({ "_id": req.body._id },
        { $set: { "name": req.body.usersName, "email": req.body.usersEmail } },
        { new: true }, (err, user) => {
            if (err) throw err;
            res.json(user);
        });

    /*User.findOne(
        { email: req.body.username, isDeleted: false },
        function(err, user) {
            if (err) throw err;
            if (user) {
  
            } else {
                console.log(req.body);
                res.status(404).send("Invalid login info")
            }
        }
    )*/

})

router.post('/user/profile', async (req, res) => {
    var schema = {
        'user_id': {
            notEmpty: true,
            errorMessage: "user_id is required"
        }
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var check = await User.findOne({ "_id": req.body.user_id, "isDeleted": false }).exec();
        if (check) {
            User.update({ "_id": req.body.user_id }, { $set: req.body }, async function (err, response) {
                if (err) {
                    return next(err);
                } else {
                    const data = await User.findOne({ "_id": req.body.user_id }).exec();
                    console.log('\n data', data);
                    res.status(config.OK_STATUS).json({ status: "success", message: "Profile updated successfully", data: data });
                }
            });
        } else {
            res.status(config.OK_STATUS).json({ status: "failed", message: "Record not found" });
        }
    } else {
        res.status(config.BAD_REQUEST).json({
            message: "Validation Error",
            error: errors
        });
    }
});

module.exports = router;
