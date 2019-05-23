const mongoose = require('mongoose');
const Trips = mongoose.model('trips');

  // Find all trips
var findAllTrips = function(req,res){
    Trips.find(function(err,trips){
        if(!err){
            res.send(trips);
        }
        else{
            res.sendStatus(404);
        }
    });
};

  // Create new trip
var createTrip = function(req, res){
    var trip = new Trips({
        "temperature": req.body.temperature,
        "time": req.body.time
    });
    trip.save(function(err, trip){
        if(!err){
            res.send(trip);
        }
        else{
            res.sendStatus(400);
        }
    });
};

module.exports.findAllTrips = findAllTrips;
module.exports.createTrip = createTrip;
