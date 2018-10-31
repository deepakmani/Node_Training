module.exports = function(app) {

	app.get("/", function() { 

		res.render("../client/index.html");
	});

	app.get("/search_twitter", function(req, res) {
		var search_keyword = req.query.search_keyword;

		// search twitter

		var tweets = [];

		// Send response
		res.json(tweets);

		res.send(data);

		res.redirect("../client/home.html");

		console.log("tweets are", tweets);


	})
}