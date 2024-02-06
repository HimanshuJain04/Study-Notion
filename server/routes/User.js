const express = require('express');
const userRoute = express.Router();

const { auth } = require("../middlewares/auth");

const { isDemo } = require("../middlewares/demo");

const {
    signup,
    login,
    sendotp,
    changePassword
} = require("../controllers/Auth");

const {
    resetPassword,
    resetPasswordToken
} = require("../controllers/ResetPassword");


// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
userRoute.post("/login", login)

// Route for user signup
userRoute.post("/signup", signup)

// Route for sending OTP to the user's email
userRoute.post("/sendotp", sendotp)

// Route for Changing the password
userRoute.post("/changepassword", auth, isDemo, changePassword)


// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
userRoute.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
userRoute.post("/reset-password", resetPassword)


module.exports = userRoute;