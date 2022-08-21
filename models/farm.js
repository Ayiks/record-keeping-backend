const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const farmSchema = new Schema({
    plant: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

exports.Farm = model('Farm', farmSchema);