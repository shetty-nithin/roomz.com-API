if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL,
    ADMIN_URL: process.env.ADMIN_URL
}