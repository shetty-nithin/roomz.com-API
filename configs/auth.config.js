require("dotenv").config();

module.exports = {
    secretKey: process.env.JWT_SECRET_KEY,
    accessTokenTime: process.env.ACCESS_TOKEN_TIME
}