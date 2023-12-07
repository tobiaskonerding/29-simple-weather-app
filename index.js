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

//calling weather api
app.get("/get-weather", (req, res) => {
    res.render("index.ejs", { content })
});