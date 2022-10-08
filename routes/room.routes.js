const roomController = require("../controllers/room.controller");
const { errorHandler, authJwt } = require("../middlewares/index");

module.exports = (app) => {
    app.post("/roomz/api/v1/rooms/:hotelId", [authJwt.verifyToken, authJwt.isAdmin], roomController.createRoom, [errorHandler.errorHandler]);

    app.get("/roomz/api/v1/rooms", roomController.getAllRooms, [errorHandler.errorHandler]);
    app.get("/roomz/api/v1/rooms/:id", roomController.getRoomById, [errorHandler.errorHandler]);

    app.put("/roomz/api/v1/rooms/:id", [authJwt.verifyToken, authJwt.isAdmin], roomController.updateRoom, [errorHandler.errorHandler]);
    app.put("/roomz/api/v1/rooms/availability/:id", [authJwt.verifyToken], roomController.updateRoomAvailability, [errorHandler.errorHandler]);

    app.delete("/roomz/api/v1/rooms/:id", [authJwt.verifyToken, authJwt.isAdmin], roomController.deleteRoom, [errorHandler.errorHandler]);
} 