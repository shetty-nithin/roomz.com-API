const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors({
    origin: [serverConfig.CLIENT_URL, serverConfig.ADMIN_URL],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

const connect = async () => {
    try {
        mongoose.connect(dbConfig.DB_URL);
        console.log("Connected to Mongo DB successfully!")
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected.")
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/hotel.routes")(app);
require("./routes/room.routes")(app);
require("./routes/booking.routes")(app);

app.listen(serverConfig.PORT, () => {
    connect();
    console.log(`server is up on the port : ${serverConfig.PORT}`);
})