const express = require('express');
const contactRoute = express.Router();

const { contactUs } = require("../controllers/ContactUs");

contactRoute.post("/contactUs", contactUs);


module.exports = contactRoute;