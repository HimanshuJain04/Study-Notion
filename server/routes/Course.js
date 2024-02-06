const express = require('express');
const courseRoute = express.Router();

// Course Controllers Import
const {
    createCourse,
    getAllCourses,
    getCourseDetails,
    getInstructorCourses,
    editCourse,
    getFullCourseDetails,
    deleteCourse,
    searchCourse,
    markLectureAsComplete,
} = require("../controllers/Course");

// Categories Controllers Import
const {
    showAllCategories,
    createCategory,
    categoryPageDetails,
    addCourseToCategory,
} = require("../controllers/Category")

// Sections Controllers Import
const {
    createSection,
    updateSection,
    deleteSection,
} = require("../controllers/Section")

// Sub-Sections Controllers Import
const {
    createSubSection,
    updateSubSection,
    deleteSubSection,
} = require("../controllers/Subsection")

// Rating Controllers Import
const {
    createRating,
    getAverageRating,
    getAllRating,
} = require("../controllers/RatingAndReview")

//demo
const { isDemo } = require("../middlewares/demo");

// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")



// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
courseRoute.post("/createCourse", auth, isInstructor, isDemo, createCourse)
//Add a Section to a Course
courseRoute.post("/addSection", auth, isInstructor, createSection)
// Update a Section
courseRoute.post("/updateSection", auth, isInstructor, updateSection)
// Delete a Section
courseRoute.post("/deleteSection", auth, isInstructor, isDemo, deleteSection)
// Edit Sub Section
courseRoute.post("/updateSubSection", auth, isInstructor, updateSubSection)
// Delete Sub Section
courseRoute.post("/deleteSubSection", auth, isInstructor, deleteSubSection)
// Add a Sub Section to a Section
courseRoute.post("/addSubSection", auth, isInstructor, createSubSection)
// Get all Registered Courses
courseRoute.get("/getAllCourses", getAllCourses)
// Get Details for a Specific Courses
courseRoute.post("/getCourseDetails", getCourseDetails)
// Edit a Course
courseRoute.post("/editCourse", auth, isInstructor, isDemo, editCourse)
// Get all Courses of a Specific Instructor
courseRoute.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
//Get full course details
courseRoute.post("/getFullCourseDetails", auth, getFullCourseDetails)
// Delete a Course
courseRoute.delete("/deleteCourse", auth, isDemo, deleteCourse)
// Search Courses
courseRoute.post("/searchCourse", searchCourse);
//mark lecture as complete
courseRoute.post("/updateCourseProgress", auth, isStudent, markLectureAsComplete);




// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************

// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
courseRoute.post("/createCategory", auth, isAdmin, createCategory)
courseRoute.get("/showAllCategories", showAllCategories)
courseRoute.post("/getCategoryPageDetails", categoryPageDetails)
courseRoute.post("/addCourseToCategory", auth, isInstructor, addCourseToCategory);


// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
courseRoute.post("/createRating", auth, isStudent, isDemo, createRating)
courseRoute.get("/getAverageRating", getAverageRating)
courseRoute.get("/getReviews", getAllRating)


module.exports = courseRoute;