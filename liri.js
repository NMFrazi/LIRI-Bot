var keys = require("./keys.js");

var  brequire("dotenv").config();

var spotify = new Spotify(keys.spotify);

require("dotenv").config();
 
 var axios = require("axios") 
 
 
 var moment = require("moment") 
 
 
 var command = process.argv[2] 
 
 
 var searchTerm = process.argv.slice(1).join("+") 
 
 
 var Concert = function() { 
     this.findConcert = function(term) { 
         var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp" 
 
 
         axios.get(URL).then(function(response) { 
             var results = response.data 
 
 
             for (var i = ; i < results.length; i++) { 
                 var venueName = results[i].venue.name; 
                 var venueLocatoin = results[i].venue.city + results[i].venue.country 
                 var concertTime = results[i].datetime 
                 var concertInfo = "Venue Name: " + venueName + "\nVenue Location: " + venueLocatoin + "\nConcert Time: " + moment(concertTime, "YYYY-MM-DD").format("L") + "\n------------" 
                 console.log(concertInfo) 
             } 
         }) 
     } 
 } 
 
 
 var Spotify = function(x, y) { 
 
 } 
 
 
 var MovieSearching = function() { 
     this.findMovie = function(term) { 
         var URL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=2b50c7b7" 
 
 
         axios.get(URL).then(function(response) { 
 
 
             var results = response.data 
 
 
             var movieTitle = results.Title; 
             var releaseYear = results.Year; 
             var imdbRating = results.Ratings[].Value 
             var rottenTomatoesRating = results.Ratings[].Value 
             var movieCountry = results.Country; 
             var movieLanguage = results.Language; 
             var moviePlot = results.Plot; 
             var movieActors = results.Actors 
 
 
             var movieInfo = "Movie Title: " + movieTitle + "\nRelease Year: " + releaseYear + "\nIMDB Rating: " + imdbRating + "\nRotten Tomatoes Rating: " + rottenTomatoesRating + "\nCountry Movie Was Produced In: " + movieCountry + "\nLanguage: " + movieLanguage + "\nPlot: " + moviePlot + "\nActors: " + movieActors + "\n" 
             console.log(movieInfo) 
         }) 
     } 
 
 
 } 
 
 
 switch(command) { 
     case "concert-this":  
         var concertSearch = new Concert() 
         concertSearch.findConcert(searchTerm) 
         <br>;
     case "spotify-this-song": 
         // use Spotify function to return needed info 
         <br>; 
     case "movie-this": 
         if (searchTerm != "") { 
             var movieSearch = new MovieSearching() 
             movieSearch.findMovie(searchTerm) 
         } else { 
             var movieSearch = new MovieSearching() 
             movieSearch.findMovie("Baby Mama") 
         } 
         <br>; 
     case "do-what-it-says": 
     
         <br>; 
     } 



 


        




 



