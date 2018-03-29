var mongojs = require('mongojs');
var db = mongojs("zoo", ["animals"]);

db.animals.find(function(error, docs){
	console.log(docs);
})