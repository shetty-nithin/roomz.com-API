const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contry: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    bookings: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Booking"
    }
}, { timestamps: true})

module.exports = mongoose.model("User", userSchema);