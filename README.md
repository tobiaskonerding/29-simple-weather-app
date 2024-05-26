# Web Development Course:<br>Capstone Project 29 "Simple Weather App"
## Weather App built with Node.js, Express and EJS
This project is for educational purposes and shows an example project during the Web Development Course I've taken.
It is a simple and very basic weather app to practice working with APIs and EJS.

Features:
* User can enter a specific location or grab one randomly. The user decides by clicking the apropriate button.
* As an outcome the user receives the current wheather information, location details, local timestamp and a google maps iframe showing the given location.

Information are provided by WeatherAPI.com.

## Get started
1. Download starting files.
2. Create an account on https://rapidapi.com/ and subscribe to the WeatherApi.com API (https://rapidapi.com/weatherapi/api/weatherapi-com).
3. Add `.env` file with 2 parameters (`X_RAPIDAPI_KEY`, `X_RAPIDAPI_HOST`) and enter your credentials.
4. Run `npm i` to install dependencies.
5. Run `nodemon index.js` and open http://localhost:3000
