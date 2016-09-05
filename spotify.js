var spotify = require('spotify');
var request = require("request");

var nodeArgs = process.argv;


var songName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {

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

