const express = require('express');
const paymentRoute = express.Router();

const { capturePayment, verifySignature, sendPaymentSuccessEmail } = require("../controllers/Payment");
const { isStudent, isInstructor, auth, isAdmin } = require("../middlewares/auth");

paymentRoute.post("/capturePayment", auth, isStudent, capturePayment)
paymentRoute.post("/verifyPayment", auth, verifySignature)
paymentRoute.post("/sendPaymentSuccessEmail", auth, sendPaymentSuccessEmail)

module.exports = paymentRoute; 