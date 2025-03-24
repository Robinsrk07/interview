const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()
const port = 8080;
const menuRoutes = require("./Routes/MenuRoutes")

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
}));

app.use(express.json());

app.use("/",menuRoutes)


mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected Successfully");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
