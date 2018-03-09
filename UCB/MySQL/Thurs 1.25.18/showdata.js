/* 

1) A query which returns all data for songs sung by a specific artist
2) A query which returns all artists who appear within the top 5000 more than once
3) A query which returns all data contained within a specific range
4) A query which searches for a specific song in the top 5000 and returns the data for it

HINT: There are some MySQL queries which could make some of these tasks 
even easier to accomplish. Feel free to look at MySQL's documentation to 
find some of them. 

*/

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'top_songsdb'
});

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as ID: ", connection.threadId);
	//singerData('Eminem');
	//**2)top5000Artists();**
	range(1990,1990);
	//4)specificSong();
});

function singerData(artist){
	connection.query('SELECT * from TOP5000 WHERE ?', 
		{
			artist: artist
		},
		function(err, res){
			if(err) throw err;
			console.log("Songs by Eminem: ", res);
	});
}

function range(min,max){
	connection.query('SELECT * from TOP5000 WHERE release_year BETWEEN ? and ?',
	[min, max],
	function(err, res){
		if(err) throw err;
		console.log('Ranges: ', res)
	});


}