function Character(name, profession, gender, age, strength, hp){
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength; 
	this.hp = hp;
	this.printStats = function(){
		console.log("Name: " + this.name);
		console.log("Profession: " + this.profession);
		console.log("Gender: " + this.gender);
		console.log("Age: " + this.age);
		console.log("Strength: " + this.strength);
		console.log("Hp: " + this.hp);
		console.log("--------------------");
	};
}

let yogi = new Character("Yogi", "Pro web developer", "Male", 35, 20, 10);
let sofiane = new Character("Sofiane", "Pro web developer", "Male", 25, 80, 30);

yogi.printStats();
sofiane.printStats();