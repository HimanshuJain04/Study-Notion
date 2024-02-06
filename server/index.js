const express = require("express");

const app = express();

const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payment");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");
const contactRoute = require("./routes/ContactUs");

const database = require("./config/database");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudnairyconnect = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
database.connect();
cloudnairyconnect();

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        maxAge: 14400,
    })
);

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp",
    })
);


app.use("/api/v1/auth", userRoutes);

app.use("/api/v1/payment", paymentRoutes);

app.use("/api/v1/profile", profileRoutes);

app.use("/api/v1/course", courseRoutes);

app.use("/api/v1/contact", contactRoute);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the API",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});