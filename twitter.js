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
