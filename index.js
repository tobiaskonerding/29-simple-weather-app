import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port = 3000;
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

//server setup
app.listen(port, () => {
    console.log(`Server is running in port ${port}.`);
});

//first page load
app.get("/", (req, res) => {
    res.render("index.ejs");
});

//random calling of weather api
app.get("/get-random-weather", (req, res) => {
    res.render("index.ejs", { content })
});

//specific calling of weather api
app.get("/get-location-weather", (req, res) => {
    res.render("index.ejs", { content })
});