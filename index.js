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
app.post("/get-random-weather", async (req, res) => {
    const positiveOrNegativ = Math.random() < 0.5 ? -1 : 1;
    const randomLatitude = Math.floor(Math.random() * 90) * positiveOrNegativ;
    const randomLongitute = Math.floor(Math.random() * 180) * positiveOrNegativ;

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: `${randomLatitude}, ${randomLongitute}`},
        headers: {
          'X-RapidAPI-Key': 'f39c5e0c43msh9c6f10dc71b2dc0p105540jsnc9817d7461f6',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

    try {
        const response = await axios.request(options);
        res.render("index.ejs", { content: JSON.stringify(response.data) });
    } catch (error) {
        res.render("index.ejs", { content: `Error orrured:  ${error.message}.` })
    }
});

//specific calling of weather api
app.post("/get-location-weather", async (req, res) => {
    const location = req.body;
    console.log(location);

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: req.body.location},
        headers: {
          'X-RapidAPI-Key': 'f39c5e0c43msh9c6f10dc71b2dc0p105540jsnc9817d7461f6',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

    try {
        const response = await axios.request(options);
        res.render("index.ejs", { content: JSON.stringify(response.data) });
    } catch (error) {
        res.render("index.ejs", { content: `Error orrured:  ${error.message}.` })
    }
});