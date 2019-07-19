var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

var config = require('./../config');

var User = require('./../models/users');

router.post('/user/sign-up', async (req,res)=>{ 
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
    userModel.save((err, userData)=> {
      userData = JSON.parse(JSON.stringify(userData));
      console.log("data:", userData);
      if (err) {
          res.status(config.BAD_REQUEST).json({
              status: 'failed',
              message: "could not register user please try again!!"
          });
      } else {
          var token = jwt.sign({ id: userData._id, user_role: userData.user_role }, config.ACCESS_TOKEN_SECRET_KEY, {
              expiresIn: 60 * 60 * 24 // expires in 24 hours
          });
          delete userData.password;
          delete userData.isDeleted;

          var result = {
              status: 'success',
              message: "User registered successfully.",
              data: { user: userData },
              token: token
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

router.get('/user', async (req,res)=>{
    res.json({'test':"riddhi"});
});

module.exports = router;
 