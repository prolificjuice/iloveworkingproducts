
const express = require('express');
const apiWeatherController = require('../controllers/apiWeatherController');
const tripsController = require('../controllers/tripsController');
const apiBikeParkingController = require('../controllers/apiBikeParkingController');

const router = express.Router();

  // Get bike parking (API)
router.get('/getParking/:lat/:lng', apiBikeParkingController.findBikeParkingByLocation);


  // Get trips
router.get('/trips', tripsController.findAllTrips);

  // Create trip
router.post('/trips', tripsController.createTrip);


  // Get weather by location (API)
router.get('/getWeather/:lat/:lng', apiWeatherController.findWeatherByLocation);


module.exports = router;
