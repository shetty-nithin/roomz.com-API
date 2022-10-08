const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        default: false
    },
    roomNumbers: [{
        number: Number,
        unavailableDates: {type: [Date]}
    }],
    hotelId: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model("Room", roomSchema);