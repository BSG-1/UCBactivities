var dogs = {
	raining: true,
	noise: "Woof!",
	makeNoise: function() {
		console.log(this.noise);	
	}
}

var cats = {
	raining: false,
	noise: "Meow!",
	makeNoise: function(){
		console.log(cats.noise);
	}
}

dogs.makeNoise();
cats.makeNoise();

//Immediately invoked functions
(function massHysteria(){
	if(dogs.raining && cats.raining){
		console.log("DOGS & CATS LIVING TOGETHER! MASS HYSTERIA!");
	}
})();




