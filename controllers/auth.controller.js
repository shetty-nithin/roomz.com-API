const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const { createError } = require("../utils/errorGenerator");
const jwt = require("jsonwebtoken");
const authConfig = require("../configs/auth.config");

exports.signup = async (req, res, next) => {
    try {
        const newUser = new User({
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10)
        });

        const createdUser = await newUser.save();
        res.status(201).json(createdUser);
    } 
    catch (error) {
        next(error);
    }
};

exports.signin = async (req, res, next) => {
    try {
        const user = await User.findOne({username : req.body.username});
        if(!user){
            return next(createError(404, "User not found!"))
        }

        const isPasswordValid = await bcryptjs.compareSync(req.body.password, user.password);
        if(!isPasswordValid){
            return next(createError(400, "wrong password or username!"));
        }

        const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, authConfig.secretKey)

        const { password, isAdmin, ...otherDetails} = user._doc;
        return res
            .cookie("accessToken", accessToken, {httpOnly: true})
            .status(200)
            .json({details:{...otherDetails}, isAdmin});
    }
    catch (error) {
        next(error);
    }
}