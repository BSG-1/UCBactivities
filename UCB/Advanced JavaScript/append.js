var fs = require('fs');

var textfile = process.argv[2];

fs.appendFile(textfile, "Hello Kitty", function(err){
	if(err){
		console.log("error",err);
	} else{
		console.log('content added');
	}
})