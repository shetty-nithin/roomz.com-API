const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId
    },
    totalCost: {
        type: Number,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    roomNumbers: [{       
        number: {
            type: [String],
            required: true,
            ref : "Room"
        },
        id: {
            type: [mongoose.SchemaTypes.ObjectId],
            ref: "Room"
        }
    }],
    hotelId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref : "Hotel"
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    }
}, { timestamps: true})

module.exports = mongoose.model("Booking", bookingSchema);