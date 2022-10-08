const userController = require("../controllers/user.controller");
const { errorHandler, authJwt } = require("../middlewares/index");

module.exports = (app) => {
    app.get("/roomz/api/v1/users", [authJwt.verifyToken, authJwt.isAdmin], userController.getAllUsers, [errorHandler.errorHandler]);
    app.get("/roomz/api/v1/users/:id", [authJwt.verifyToken, authJwt.isUserOrAdmin], userController.getUserById, [errorHandler.errorHandler]);
    app.put("/roomz/api/v1/users/:id", [authJwt.verifyToken, authJwt.isUserOrAdmin], userController.updateUser, [errorHandler.errorHandler]);
    app.delete("/roomz/api/v1/users/:id", [authJwt.verifyToken, authJwt.isUserOrAdmin], userController.deleteUser, [errorHandler.errorHandler]);
}