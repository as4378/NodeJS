const request = require('request');
const argv = require('yargs').argv;

let apiKey = '268abd8c031b69b1c2d28e614f39c941';
let city = argv.c || 'portland';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}'

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = 'Its ${weather.main.temp} degrees in ${weather.name}!';
    console.log(message);
  }
});