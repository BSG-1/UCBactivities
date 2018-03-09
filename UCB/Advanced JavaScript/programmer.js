function Programmer(name, position, age, language){
	this.name = name;
	this.position = position;
	this.age = age;
	this.language = language;
	this.print = function(){
		console.log("---------------------------" + "\n")
		console.log("Name: " + this.name);
		console.log("Job position: " + this.position);
		console.log("Age: " + this.age);
		console.log("Favorite programming language: " + this.language);
		console.log("---------------------------" + "\n")
	};

}

let person1 = new Programmer("Bahadur", "Full Stack Web Developer", 27, "JavaScript");

person1.print()