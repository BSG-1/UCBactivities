let express = require("express");
let mysql = require("mysql");
let app = express();

let connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "seinfeld"
})

connection.connect(function(err){
	if (err) throw err;
	console.log("Connect ad Id: " + connection.threadId);
});

let query = "SELECT * FROM actors";

connection.query(query, function(err, result){
	var html = "<h1>Seinfeld </h1>";
	html += "<ul>";
	for (var i = 0; i < result.length; i++) {
		html += "<li><p> ID: " + result[i].id + "</p>";
		html += "<p>Name: " + result[i].name + "</p>";
		html += "<p>Cooless Points: " + result[i].coolness_points + "</p>";
		html += "<p>Attitude: " + result[i].attitude + "</p></li>";
	}
	html += "</ul>";

	app.get("/:order/:cast", function(req, res){
		
		let operation = req.params.cast

		var result;

		switch (operation) {
	    	case "coolnes_chart":
		    	break;
		    case "attitude":
		    	result = num1 - num2
		      	break;
		    case "multiply":
		      	result = num1 * num2
		      	break;
		    case "divide":
		      	result = num1 / num2
		      	break;
		    default:
		      	result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  		}
		


		res.send(html);

	});

	app.listen(3306);
})

