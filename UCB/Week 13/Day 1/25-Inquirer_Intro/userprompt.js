// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer
	.prompt([

		{
			type: "input",
			message: "Who are you?",
			name: "username"
		},
		{
			type: "password",
			message: "Set your password:",
			name: "password"
		},
		{
			type: "list",
			message: "What's your favorite show?",
			choices: ["Peaky Blinders", "Ed, Edd, & Eddy", "Game of Thrones"]
			name: "shows"
		},
		{
			type: "checkbox",
			message: "What's your favorite show?",
			choices: ["Peaky Blinders", "Ed, Edd, & Eddy", "Game of Thrones"]
			name: "checkbox"
		},
		{
			type: "confirm",
			message: "You sure about that?",
			name: "confirm"
			default: true
		}
	])
	.then(function(inquirerResponse){
		if(inquirerResponse.confirm){
			console.log("\nWelcome " + inquirerResponse.username);
			console.log("\nYour favorite show is " + inquirerResponse.checkbox);			

		}
		else {
			console.log("\nYou suck " inquirerResponse.username + ", come back and try again.");
		}
	})










