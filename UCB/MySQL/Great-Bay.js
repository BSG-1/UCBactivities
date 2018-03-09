let inquirer = require("inquirer");
let mysql = require("mysql");


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


inquirer.prompt([
	{
		name:"FirstQuestion",
		type: "list",
		choices: ['BID', 'POST'],
		message: "Would you like to BID or POST today?"
	}
]).then(answers => {
	console.log(answers.FirstQuestion);
	if(answers.FirstQuestion === 'POST'){
		inquirer.prompt([
			{
				name:"itemName",
				message: "Please provide the item's name"
			},
			{
				name:"itemCategory",
				message: "Please provide the item's category"
			},
			{
				name:"itemBid",
				message: "What is your starting bid?"
			}
		]).then(answers => {
			console.log(answers);
			function create(){
				console.log("You've just added a new item!");
				var query = connection.query(
				"INSERT INTO auctions SET ?",
					{
						item_name: answers.itemName,
						category: answers.itemCategory,
						starting_bid: answers.itemBid
					},
					function(err, res){
						console.log(res.affectedRows + "product inserted!");
					}

				);
			}

	// } else {
});
	// }





});