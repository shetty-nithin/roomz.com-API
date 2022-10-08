const authController = require("../controllers/auth.controller");
const { errorHandler } = require("../middlewares/index");

module.exports = (app) => {
    app.post("/roomz/api/v1/auth/signup", authController.signup, [errorHandler.errorHandler]);
    app.post("/roomz/api/v1/auth/signin", authController.signin, [errorHandler.errorHandler]);
}