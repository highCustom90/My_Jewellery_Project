const express = require("express");
const cloudinary = require('cloudinary').v2;
const cors = require("cors");
const connectDB = require("./config/db");
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

// connect with db
connectDB();


// import routes
const authRoute = require("./routes/authRoutes");
const cartRoute = require("./routes/addToCartRoutes");

// use routes
app.use("/auth", authRoute);
app.use("/cart", cartRoute);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
    // cname: "images.High_Custom_Jewellers.com"
});


// get all images from cloudinary
app.get('/api/images', (req, res) => {
    cloudinary.api.resources(
        {
            type: 'upload',
            max_results: 500,// You can adjust this as needed (max 500)
        },
        function (error, result) {
            if (error) {
                res.status(500).json({ error });
            } else {
                // this is function of permently image delete from folder
                // result.resources.forEach(el => {
                //     cloudinary.uploader.destroy(el.public_id, { invalidate: true }, function (error, result) {
                //         console.log(result, error);
                //     });
                // });
                res.json(result.resources);
            }
        }
    );

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port 4500");
});

