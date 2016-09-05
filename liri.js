var inquirer = require('inquirer');
var twitter = require("twitter");
// var spotify = require("spotify");
var request = require("request");

var command = process.argv[2];

if (command == "my-tweets") {

	console.log("tweets");
    
    // var client = new twitter({
    //     consumer_key: 'qOtDBVNAnmZpKfFwnlpfFQuC9',
    //     consumer_secret: 'ZW877iuDpcSpvF1ZuSaUOzDcoPWmRBZMfSXL3zskwLtDNd5b7j',
    //     access_token_key: '772253869363515392-2rjDXYTpp58BkqzWIUpnwoK27R2fNzU',
    //     access_token_secret: 'neabgPXdOdW2RIi2FsyBXY19tSLPjAlvktJIIHCVLheWE',
    // });

    // var params = { screen_name: '@leonardohyea' };
    // client.get('statuses/user_timeline', params, function(error, tweets, response) {
    //     if (!error) {
    //         // var tweetArray = JSON.parse(tweets);
    //         console.log("tweetcount: " + tweets.length);
    //         for (i = 0; i < tweets.length; i++) {
    //             console.log(tweets[i].text);
    //         };


    //     }
    // });



};

else if (command == "movie-this") {

	console.log("movie");
    // var movieName = process.argv[3];

    // // Then run a request to the OMDB API with the movie specified 
    // var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json&tomatoes=true';

    // // This line is just to help us debug against the actual URL.  
    // console.log(queryUrl);
    // console.log("===================================================================");

    // request(queryUrl, function(error, response, body) {

    //             // If the request is successful (i.e. if the response status code is 200)
    //             if (!error && response.statusCode == 200) {

    //                 // Parse the body of the site and recover just the imdbRating
    //                 // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). 
    //                 console.log("Title: " + JSON.parse(body).Title);
    //                 console.log("Year Released: " + JSON.parse(body).Year);
    //                 console.log("IMDB's Rating: " + JSON.parse(body).imdbRating);
    //                 console.log("Country movie was produced: " + JSON.parse(body).Country);
    //                 console.log("Language: " + JSON.parse(body).Language);
    //                 console.log("Plot: " + JSON.parse(body).Plot);
    //                 console.log("Actors: " + JSON.parse(body).Actors);
    //                 console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
    //                 console.log("Rotten Tomatoes url: " + JSON.parse(body).tomatoURL);

    //             }


            };
else {console.log("Didnt Do This Part Yet Homie")};            
