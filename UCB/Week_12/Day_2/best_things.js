var fs = require('fs');
fs.writeFile("best_things_ever.txt", "lazy boy recliner, massage, meditation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep on my lap"
	, function(err){
	
	if(err){
		console.log("We have an error: ", err);
	}
});
console.log('best_things_ever.txt was updated');


fs.readFile("best_things_ever.txt", 'utf8', function(error, data){
	if(error){
		console.log("Error reading file:", error)
	}
	var dataArray = data.split(',');

	for (var i = 0; i < dataArray.length; i++) {
		console.log(dataArray[i]);
	}
});

	




