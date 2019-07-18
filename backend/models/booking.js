const mongoose = require('mongoose');
// author Lakshmi Narayana lk720991@dal.ca 

//Reference: https://nodejs.org/en/docs/guides/simple-profiling/
// https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

const bookingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    photographerDetails: { },
    rate: { type:Number , required:true },
    eventType : { type:String , required:true },
    eventDate : { type:String , required:true },
    address: { type:String , required:true },
    status:{type:String , required:true}
});
//Above booking schema function is used to store booking information of customer in database with collection name bookings

module.exports = mongoose.model('Booking', bookingSchema);