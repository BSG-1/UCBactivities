var weather = require("weather-js");
var inquirer = require("inquirer");
var fs = require("fs");

var userInput = process.argv[2];
var name = process.argv[3];
var location = process.argv[4]


if (userInput === "user"){
	class adminView{
		constructor(name, location){
			this.name = name;
			this.location = location;
			this.date = new Date();
		}
	}

	weather.find({ search: location, degreeType: "F" }, function(err, result) {
	  // If there is an error log it.
	  if (err) console.log(err);
	  var newUser = new adminView(name, result[0].location.name);
	  console.log(JSON.stringify(result[0].location.name));
	  console.log(JSON.stringify(result[0].current.temperature + " F"));

	  console.log(newUser);
	  fs.appendFile("log.txt", JSON.stringify(newUser), function(err){
	  	if (err){
	  		return console.log(err);
	  	}
	  });
	  console.log("log.txt updated!");
	});
} else if (userInput = "admin"){
	fs.readFile("log.txt", function(err, result){
		console.log(result);
	})
} else {
	console.log('ERROR-ERROR-ERROR-ERROR-ERROR-ERROR');
}

  // If there is no error... then print out the weather data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  