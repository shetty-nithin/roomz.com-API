const Room = require("../models/room.model");
const Hotel = require("../models/hotel.model");

exports.createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;

    try { 
        const newRoom = new Room({...req.body, hotelId: hotelId});
        try {
            const savedRoom = await newRoom.save();
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}});
            return res.status(200).json(savedRoom);
        }
        catch (err) {
            next(err);
        }
    }
    catch (err) {
        next(err);
    }    
};

exports.getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    }
    catch (error) {
        next(error);
    }
}

exports.getRoomById = async (req, res, next) => {
    try {
        const room = await Room.findOne({_id: req.params.id});
        res.status(200).json(room);
    }
    catch (error) {
        next(error);
    }
}

exports.updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedRoom);
    }
    catch (error) {
        next(error);
    }
}

exports.updateRoomAvailability = async (req, res, next) => {
    try {
        // TODO: req.params.id is not the room id, its the checkbox id. That has to be changed to for other functionalities
        const updatedRoom = await Room.updateOne({"roomNumbers._id": req.params.id}, {$push: {"roomNumbers.$.unavailableDates": req.body.dates}})
        res.status(200).json(updatedRoom);
    }
    catch (error) {
        next(error);
    }
}

exports.deleteRoom = async (req, res, next) => {
    const room = await Room.findOne({_id: req.params.id});
    const hotelId = room.hotelId;

    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: req.params.id}});
            // TODO: need to remove from user's bookings also.
        }
        catch (err) {
            next(err);
        }
        res.status(200).json("Room has been deleted.");
    }
    catch (error) {
        next(error);
    }
}