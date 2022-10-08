const hotelController = require("../controllers/hotel.controller");
const { errorHandler, authJwt } = require("../middlewares/index");

module.exports = (app) => {
    app.post("/roomz/api/v1/hotels", [authJwt.verifyToken, authJwt.isAdmin], hotelController.createHotel, [errorHandler.errorHandler]);

    app.get("/roomz/api/v1/hotels", hotelController.getAllHotels, [errorHandler.errorHandler]);
    app.get("/roomz/api/v1/hotels/find/:id", hotelController.getHotelById, [errorHandler.errorHandler]);
    app.get("/roomz/api/v1/hotels/rooms/:id", hotelController.getHotelRooms, [errorHandler.errorHandler]);
    
    app.put("/roomz/api/v1/hotels/:id", [authJwt.verifyToken, authJwt.isAdmin], hotelController.updateHotel, [errorHandler.errorHandler]);
    app.delete("/roomz/api/v1/hotels/:id", [authJwt.verifyToken, authJwt.isAdmin], hotelController.deleteHotel, [errorHandler.errorHandler]);
}