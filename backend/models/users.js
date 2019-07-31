//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var config = require('./../config');
var SALT_WORK_FACTOR = config.SALT_WORK_FACTOR;
//Define a schema
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: String,
    email: {
        type: String,
        required: true
    },
    requirement: [{
        date: { type: String },
        from: { type: String },
        to: { type: String }
    }],
    profile_image: String,
    password: String,
    country: String,
    experience: String,
    expertise: String,
    language_skills: String,
    photography_equipments: String,
    personal_website: String,
    charge_per_hour: String,
    fb_url: String,
    insta_url: String,
    twitter_url: String,
    user_role: {
        type: String,
        enum: ["user", "photographer"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: { type: Date, default: Date.now }
}, { versionKey: false });
//password encription
UserSchema.pre('save', function (next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password'))
        return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err)
            return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
// Compile model from schema
var User = mongoose.model('users', UserSchema, 'users');
module.exports = User;