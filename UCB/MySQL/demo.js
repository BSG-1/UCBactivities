var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '',
	database: 'playlist_db'
});

//console.log("connection", connection);

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as ID: ", connection.threadId);
	selectAll(); 
	create();
});

function selectAll(){
	connection.query('SELECT * from id', function(err, res){
		if (err) throw err;
		console.log("result", res);

	});
}

function create(){
	console.log("Adding a new song");
	var query = connection.query(
		"INSERT INTO id SET ?",
		{
			title:"Song1",
			artist:"Hella Cool Artist",
			genre:"Punjabi"
		},
		function(err, res){
			console.log(res.affectedRows + " product inserted!");
		}
	);
}

function update(){
	console.log("Updating!");
	var query = connection.query(
		"UPDATE id SET ? WHERE ?",
		[
			{

			},
			{

			}
		],
		function
	);
}