const mongoose = require('mongoose');

const OrdreSchema = new mongoose.Schema({

    service_type: {
        type: String,
        required: true
    },
    schedule_date: {
        type: String,
        required: true
    },
    schedule_time: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true,
    },
    qty: {
        type: String,
        required: true
    },
    payment_mode: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = Order = mongoose.model('order', OrdreSchema);
