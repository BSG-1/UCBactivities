// console.log(process.argv[2]==process.argv[3] ? "truebruv" : "falsebruv");

// var argOne = process.argv[2]
// var argTwo = process.argv[3]

var fs = require('fs');
fs.writeFile("moves.txt", "Jaws, Jumanji, GodFather", function(err)){
	if(err){
		console.log("We have an error: ", err);
	}
});
console.log('movies.txt was updated');


fs.readFile("movies.txt", 'utf8', function(error, data){
	if(error){
		console.log("Error reading file:", error)
	}
	var dataArray = data.split(',');

	console.log('dataArray', dataArray);
})
