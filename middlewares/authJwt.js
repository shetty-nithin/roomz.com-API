const jwt = require("jsonwebtoken");
const { createError } = require("../utils/errorGenerator");
const authConfig = require("../configs/auth.config");
const User = require("../models/user.model");

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token){
        return next(createError(401, "You are not authenticated."));
    }

    jwt.verify(token, authConfig.secretKey, async (err, decoded) => {
        if(err){
            return next(createError(403, "Token is not valid!"));
        }
        
        req.user = await User.findOne({_id: decoded.id});
        next();
    })
}

const isUserOrAdmin = (req, res, next) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        next();
    }
    else {
        return next(createError(403, "You are not authorized!"));
    }
}

const isAdmin = (req, res, next) => {
    if(req.user.isAdmin){
        next();
    }
    else {
        return next(createError(403, "Your not authorized! Only admin can access this route."));
    }
}

module.exports = { verifyToken, isUserOrAdmin, isAdmin };