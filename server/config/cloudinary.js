const cloudinary = require('cloudinary').v2
require('dotenv').config();

const cloudnairyconnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        })
        console.log("Cloudinary connected");


    } catch (error) {
        console.log("error connecting Cloudinary : " + error)
    }
}

module.exports = cloudnairyconnect;