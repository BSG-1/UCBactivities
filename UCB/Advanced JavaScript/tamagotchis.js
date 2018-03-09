class DigitalPal{
	constructor(){
		this.hungry = false;
		this.sleepy = false;
		this.bored = true;
		this.age = 0;
	}
	feed(){
		if (this.hungry){
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		}
		else{
			console.log("No thanks I'm full!");
		}
	}
	sleep(){
		if(this.sleepy===true){
			console.log("ZzzZzZZzzzZZ");
			this.sleepy = false;
			this.bored = true;
			increaseAge();
		}
		else{
			console.log("No way! I'm not tired");		
		}
	}
	play(){
		if(this.bored){
			console.log("Yay let's play!");
			this.bored = false;
			this.hungry = true;
		}
		else{
			console.log("Not right now. Later?");
		}
	}
	increaseAge(){
		this.age++;
		console.log("Happy birthday to me! I am " + this.age + " old!");
	}

}

let dog = new DigitalPal();
dog.outside = false;
dog.bark = () => {
	console.log("Woof! Woof!");
}
dog.goOutside = () => {
	if(this.outside){
		console.log("Yay! I love the outdoors!"){
			this.outside = true;
			this.bark();
	}
	else{
		console.log("We're already outside though...")
	}
}
dog.goInside = () => {
	if(this.outside === true){
		console.log("Do we ahve to? Fine...");
		this.outside = false;
	}
	else{
		console.log("I'm already inside...");
	}
}

let cat = new DigitalPal();
cat.HouseCondition = 100;
cat.meow = () => {
	console.log("Meowwwww!");
}
cat.destroyFurniture = () => {
	this.HouseCondition -= 10;
	console.log("MUAHAHAH! TAKE THAT FURNITURE!");
	this.bored = false;
	this.sleepy = true;
	if(HouseCondition === 0){

	}
}

console.dir(dog);