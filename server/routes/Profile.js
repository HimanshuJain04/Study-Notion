const express = require('express');
const profileRoute = express.Router();
const { isInstructor, auth } = require("../middlewares/auth");

const {
    updateProfile,
    deleteAccount,
    getAllUserDetails,
    getEnrolledCourses,
    updateDisplayPicture,
    instructorDashboard
} = require("../controllers/Profile");

const { isDemo } = require("../middlewares/demo");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

// Delet User Account
profileRoute.delete("/deleteProfile", auth, isDemo, deleteAccount)
profileRoute.put("/updateProfile", auth, isDemo, updateProfile)
profileRoute.get("/getUserDetails", auth, getAllUserDetails)
// Get Enrolled Courses
profileRoute.get("/getEnrolledCourses", auth, getEnrolledCourses)
profileRoute.put("/updateDisplayPicture", auth, isDemo, updateDisplayPicture)
//get instructor dashboard details
profileRoute.get("/getInstructorDashboardDetails", auth, isInstructor, instructorDashboard)


module.exports = profileRoute;