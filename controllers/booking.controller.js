const Booking = require("../models/booking.model");
const Hotel = require("../models/hotel.model");
const User = require("../models/user.model");

exports.createBooking = async (req, res, next) => {
    try {
        const bookingObj = {
            userId: req.user._id,
            totalCost: req.body.totalCost,
            roomType: req.body.roomType,
            roomNumbers: req.body.roomNumbers,
            hotelId: req.body.hotelId,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        }
        
        const roomBooked = await Booking.create(bookingObj);

        await req.user.bookings.push(roomBooked._id);
        await req.user.save();

        const hotel = await Hotel.findOne({_id: req.body.hotelId}); 
        await hotel.bookings.push(roomBooked._id);
        await hotel.save();

        res.status(201).send(roomBooked);
    }
    catch(err){
        next(err);
    }
};

exports.getAllBookings = async (req, res, next) => {
    try {
        let queryObj = {};

        if(req.user.isAdmin === false){
            queryObj["_id"] = {$in : req.user.bookings};
        }

        const bookings = await Booking.find(queryObj);
        return res.status(200).send(bookings);
    }
    catch(err){
        next(err);
    }
};

exports.getBookingById = async (req, res, next) => {
    try {
        const booking = await Booking.findOne({_id: req.params.id});

        if(!booking){
            return res.status(404).send({
                messaage : "No booking with this Id"
            })
        }
        
        return res.status(200).send(booking);
    }
    catch(err){
        next(err);
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        return res.status(200).send(updatedBooking);
    }
    catch(err){
        next(err);
    }
};


exports.deleteBooking = async (req, res, next) => {
    const booking = await Booking.findOne({_id: req.params.id});
    const hotelId = booking.hotelId;

    try {
        await Booking.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {bookings: req.params.id}});
            await User.findByIdAndUpdate(booking.userId, {$pull: {bookings: req.params.id}})
        }
        catch (err) {
            next(err);
        }
        res.status(200).json("Booking has been deleted.");
    }
    catch (error) {
        next(error);
    }
}
