var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PaymentSchema = new Schema({
    photographer_name: {
        type: String,
        required: true
    },
    booking_status:{
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    hours: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cardnumber:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    CVC: {
        type: String,
        required: true
    },
    modifiedAt: {type: Date, default: Date.now}
}, {versionKey: false});
var Payment = mongoose.model('payment', PaymentSchema, 'payment');
module.exports = Payment;