
module.exports = function() {
	var User = { 
	                name: 			"Deepak", 
	 			    Username: 	 	"DeepakABS", 
	                Email_id: 	 	"deepakabs@abs.com", 
	                location: 		"India",
	                search_keywords: ["reactsj beginners", "nigeria, bootcamp", "nigeria bootcamp"]
	                get_search_keywords: get_search_keywords
	             
	            };

	// Dot notation
	 var name = User.name;

	// Brackets notation
	var name2 = User["name"];


	function foo(name, username, email) {
		//

	}

	function foo(user) {
		// 
		user.name;

		user.phone_num = "999";

		console.log("User is:", user);
		
		// Delete 
		delete user.phone_num;

		console.log("User is:", user);
	};


	function get_search_keywords(search_keywords) {
		
	}

	console.log("", get_search_keywords )
	return User;
} 

