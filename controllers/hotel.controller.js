const Hotel = require("../models/hotel.model");
const Room = require("../models/room.model");


exports.createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
    }
    catch (error) {
        next(error);
    }
}

exports.getAllHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({...others, cheapestPrice: { $gt: min || 1, $lt: max || 9999}}).limit(req.query.limit);
         res.status(200).json(hotels);
    }
    catch (error) {
        next(error);
    }
}

exports.getHotelById = async (req, res, next) => {
    try {
        const hotel = await Hotel.findOne({_id: req.params.id});
        res.status(200).json(hotel);
    }
    catch (error) {
        next(error);
    }
}

exports.getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(hotel.rooms.map(room => {
            return Room.findById(room);
        }));

        res.status(200).json(list);
    }
    catch (error) {
        next(error);
    }
}

exports.updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
    }
    catch (error) {
        next(error);
    }
}

exports.deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");
    }
    catch (error) {
        next(error);
    }
}