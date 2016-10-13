
var Twitter = require('twitter'); //connects to your twitter
var request = require('request'); //allows ajax requests
var fs = require('fs'); //reads and writes files


var getMyTweets = function(){
   
  var client = new Twitter(keys.twitterKeys);
   
  var params = {screen_name: 'inrtracker'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      //console.log(tweets);
      //debugger; //used to find out what's inside tweets in the iron-node console
      for(var i=0; i < tweets.length; i++){
        console.log(tweets[i].created_at);
        console.log('');
        console.log(tweets[i].text);
      }
    }
  }); 
}




var pick = function(caseData, functionData){
  switch(caseData) {
      case 'my-tweets':
          getMyTweets();
          break;
      case 'spotify-this-song':
          getMeSpotify(functionData);
          break;
      case 'movie-this':
        getMeMovie(functionData);
        break;
      case 'do-what-it-says':
        doWhatItSays();
        break;
      default:
          console.log('LIRI doesn\'t know that');
  }
}

// run this on load of js file
var runThis = function(argOne, argTwo){
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);