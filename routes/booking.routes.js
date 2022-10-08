const bookingController = require("../controllers/booking.controller");
const { errorHandler, authJwt } = require("../middlewares/index");

module.exports = (app) => {
    app.post("/roomz/api/v1/bookings", [authJwt.verifyToken], bookingController.createBooking, [errorHandler.errorHandler]);
    app.get("/roomz/api/v1/bookings", [authJwt.verifyToken], bookingController.getAllBookings, [errorHandler.errorHandler]);
    app.get("/roomz/api/v1/bookings/:id", [authJwt.verifyToken], bookingController.getBookingById, [errorHandler.errorHandler]);
    app.put("/roomz/api/v1/bookings/:id", [authJwt.verifyToken], bookingController.updateBooking, [errorHandler.errorHandler]);
    app.delete("/roomz/api/v1/bookings/:id", [authJwt.verifyToken], bookingController.deleteBooking, [errorHandler.errorHandler]);
}