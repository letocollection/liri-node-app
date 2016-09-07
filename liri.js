// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

//format will be (node liri.js movie-this forrest gump)
if (process.argv[2] == "movie-this") {
    var request = require("request");

    var nodeArgs = process.argv;

    // Create an empty variable for holding the movie name
    var movieName = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {

            movieName = movieName + "+" + nodeArgs[i];

        } else {

            movieName = movieName + nodeArgs[i];
        }
    }




    // Then run a request to the OMDB API with the movie specified 
    var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json&tomatoes=true';


    console.log(queryUrl);


    request(queryUrl, function(error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode == 200) {

            console.log("===================================================================");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year Released: " + JSON.parse(body).Year);
            console.log("IMDB's Rating: " + JSON.parse(body).imdbRating);
            console.log("Country movie was produced: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            console.log("Rotten Tomatoes url: " + JSON.parse(body).tomatoURL);
            console.log("===================================================================");

        }
    });

} else if (process.argv[2] == "spotify-this-song") {
    var spotify = require('spotify');
    var request = require("request");

    var nodeArgs = process.argv;


    var songName = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {

            songName = songName + "+" + nodeArgs[i];

        } else {

            songName = songName + nodeArgs[i];
        }
    }


    var queryUrl = 'https://api.spotify.com/v1/search?query=' + songName + '&offset=0&limit=1&type=track'
        // console.log(queryUrl)

    request(queryUrl, function(error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode == 200) {

            console.log("===================================================================");
            console.log("Artist(s): " + JSON.parse(body).tracks.items[0].artists[0].name);
            console.log("Song Name: " + JSON.parse(body).tracks.items[0].name);
            console.log("Song Link: " + JSON.parse(body).tracks.items[0].external_urls.spotify);
            console.log("Album : " + JSON.parse(body).tracks.items[0].album.name);
            console.log("===================================================================");

        } else {
            console.log("===================================================================");
            console.log("Artist(s): Ace of Base");
            console.log("Song Name: The Sign");
            console.log("Song Link: https: //open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE");
            console.log("Album: The Sign(US Album)[Remastered]");
            console.log("===================================================================");

        }
    });


} else if (process.argv[2] == "my-tweets") {

    var twitter = require("twitter");
    var request = require("request");

    var client = new twitter({
        consumer_key: 'qOtDBVNAnmZpKfFwnlpfFQuC9',
        consumer_secret: 'ZW877iuDpcSpvF1ZuSaUOzDcoPWmRBZMfSXL3zskwLtDNd5b7j',
        access_token_key: '772253869363515392-2rjDXYTpp58BkqzWIUpnwoK27R2fNzU',
        access_token_secret: 'neabgPXdOdW2RIi2FsyBXY19tSLPjAlvktJIIHCVLheWE',
    });

    console.log("===================================================================");
    var params = { screen_name: '@leonardohyea' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log("tweetcount: " + tweets.length);
            for (i = 0; i < tweets.length; i++) {

                console.log(tweets[i].text);

            };
            console.log("===================================================================");

        }
    });
} else {
    fs = require('fs');

    fs.readFile('random.txt', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });
}
