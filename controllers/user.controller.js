const User = require("../models/user.model");


exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findOne({_id: req.params.id});
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
    }
    catch (error) {
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        // TODO: user's bookings also needs to be deleted.
        res.status(200).json("User has been deleted.");
    }
    catch (error) {
        next(error);
    }
}