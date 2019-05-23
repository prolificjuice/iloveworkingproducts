WeatherToBike
=============
###### Welcome to WeatherToBike, the application that helps you get started cycling in Melbourne.
---
## What is our application all about?
Our application is targeted at Melbournians who wish to begin their cycling journey. Whether choosing to cycle for convenience, excercise or reducing our carbon footprint. Our application will make it easier for you to get started by providing turn-by-turn cycling directions to your destination, current and predicted weather conditions, available bicycle parking and overall expected travel time. 

Our application's main features include:
* Turn-by-turn directions to your destination
* Weather
* Bicycle parking locations
* User profiles to save favourite destinations, locations and preferred weather conditions

## Want to clone our repository?
[GitHub repository](https://github.com/akelms/info30005-2019-pf.git)

## Frequently asked questions
* How does this application retrieve its weather data?
  * **We utilise publically available API's such as Google Maps and OpenWeather to retrieve directions, travel times and weather data**
* Can you guarantee bicycle parking at my destination?
  * **We utilise the Melbourne Open Data portal to retrieve suggested bicycle parking availability, however this does not guarantee availability. The good news is; as you are choosing to cycle, you can park your bicycle almost anywhere e.g. The nearest street parking pole (and for free!)**

## API Requests to test
* User GET Requests:
    * https://weathertobike-prod.herokuapp.com/users
    * https://weathertobike-prod.herokuapp.com/users/surname/Edhie%20Wahidin
    * https://weathertobike-prod.herokuapp.com/users/surname/Johari
    * https://weathertobike-prod.herokuapp.com/users/surname/Baffi
    * https://weathertobike-prod.herokuapp.com/users/surname/Saleh
* User POST Request (Using CURL):
    * curl -i -X POST -H 'Content-Type: application/json' -d '{"firstname": "John", "surname": "Smith", "email": "email@email.com", "age": "99"}' https://weathertobike-prod.herokuapp.com/users

* Weather GET Requests:
    * https://weathertobike-prod.herokuapp.com/weather
    * https://weathertobike-prod.herokuapp.com/weather/location/Melbourne
    * https://weathertobike-prod.herokuapp.com/weather/location/Sydney
* Weather POST Request (Using CURL):
    * curl -i -X POST -H 'Content-Type: application/json' -d '{"city": "Brisbane", "weatherdesc": "Cloudy", "longitude": "-27.46794", "latitude": "153.02809", "time": "2019-04-14T16:00:00Z"}' https://weathertobike-prod.herokuapp.com/weather

* Parking GET Requests:
    * https://weathertobike-prod.herokuapp.com/parking
    * https://weathertobike-prod.herokuapp.com/parking/location/Melbourne
    * https://weathertobike-prod.herokuapp.com/parking/location/Sydney
* Parking POST Request (Using CURL):
    * curl -i -X POST -H 'Content-Type: application/json' -d '{"city": "University of Melbourne (East Side)", "longitude": "-27.46794", "latitude": "153.02809"}' https://weathertobike-prod.herokuapp.com/parking
    
## Deliverable 4: 
for the directions page the form requires you to press enter after inputting departing location while input box is touched and press enter after inputting destination while input box is touched, the bike parking will only return if at least a destination is input.
The Trips page also shows all the trips in the console.log after clicking the buttom on the page.
