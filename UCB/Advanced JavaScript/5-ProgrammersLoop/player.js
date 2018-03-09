var inquirer = require("inquirer");

function Player(name, position, offense, defense){
	this.name = name;
	this.position = position;
	this.offense = offense; 
	this.defense = defense;
	this.goodGame = function() {
	    if (Math.floor(Math.random() * 2) === 0) {
	      this.offense++;
	      console.log(this.name + "'s offense has gone up!\n----------");
	    }
	    else {
	      this.defense++;
	      console.log(this.name + "'s defense has gone up!\n----------");
	    }
  	};
  	this.badGame = function() {
	    if (Math.floor(Math.random() * 2) === 0) {
	      this.offense--;
	      console.log(this.name + "'s offense has gone down!\n----------");
	    }
	    else {
	      this.defense--;
	      console.log(this.name + "'s defense has gone down!\n----------");
	    }
	};
	this.printStats = function(){
		console.log("--------------------" + "\n");
		console.log("Name: " + this.name);
		console.log("Position: " + this.position);
		console.log("Offense: " + this.offense);
		console.log("Defense: " + this.defense);
		console.log("--------------------" + "\n");
	};
}

var count = 0;
var playerArray = [];
var askQuestion = function(){
	if (count < 8){
		console.log("NEW PLAYER");
				inquirer.prompt([
					  {
					    name: "Name",
					    message: "What is your name?"
					  }, {
					    name: "position",
					    message: "What is your current player position?"
					  }, {
					    name: "offense",
					    message: "How good are you on offense on a scale of 1 - 10 (10 being best)?"
					  }, {
					    name: "defense",
					    message: "How good are you on defense on a scale of 1 - 10 (10 being best)?"
					  }
				]).then(function(answers) {
  				// initializes the variable newguy to be a programmer object which will take
  				// in all of the user's answers to the questions above
  					var newGuy = new Programmer(
					    answers.name, 
					    answers.position, 
					    answers.age, 
					    answers.language);
  // printInfo method is run to show that the newguy object was successfully created and filled
  				newGuy.printInfo();
		});
	}

}
askQuestion();




