var Twitter = require("twitter");
const fs  	= require('fs');

module.exports = function(app) {

	app.get("/", function() { 

		res.render("../client/index.html");
	});

	app.get("/api/search_twitter", function(req, res) {
		// Keyword to search
		var search_keyword = req.query.search_keyword;

		// Twitter client
		var twitter_client = new Twitter({
										  consumer_key: "2i9EW8WkyIEr7ZwR9oO4KZWUU",
										  consumer_secret: "V95tZ7T6Ed3Q1LnokwrxSSir7vKzR7RtQKgsmSjKYFHCccyC9s",
										  access_token_key: "1724608555-2AfqipBQ2ziRnex51pJeLEncBlsehxn9OcqTwDS",
										  access_token_secret: "IvbzE2Ngob3AQeuTBJ5J3Uv8m3sbJHb0fzXsi3hKxCjzN"
										});
		
		search_twitter_promise(twitter_client, search_keyword)
		.then(function(tweets) {
			res.send(tweets);
			return write_tweets_to_fs(tweets);
		})
		.then(function() {
			console.log("File is saved to FS");
		})
		.catch(function(err) {
			console.log("error:", err);
		})



		


	})
}

function search_twitter_promise(twitter_client, search_keyword) {
	return new Promise((resolve, reject) => {
		twitter_client.get('search/tweets', {q: search_keyword}, function(error, tweets, response) {
			if (error) {
				reject(error);
			}
			else {
				resolve(tweets);
			}
		});
	});
}

function write_tweets_to_fs(tweets){
	return new Promise((resolve, reject) => {
		fs.writeFile("./tweets.txt", JSON.stringify(tweets), function(err) {
			if (err) {
				reject(err);
			}
			else  {
				resolve();
			}
		});
	});
}
