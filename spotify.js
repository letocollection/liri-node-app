var spotify = require('spotify');
var request = require("request");
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    console.log(data);

    var queryUrl = 'https://api.spotify.com/v1/search?query=' + songName + '&offset=0&limit=20&type=track'

});