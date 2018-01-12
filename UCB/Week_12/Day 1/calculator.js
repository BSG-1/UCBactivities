function calculator(a,b){

	switch (process.argv[2]){
		case 'add': console.log(parseInt(a) + parseInt(b))
		break;
		case 'subtract': console.log(parseInt(a) - parseInt(b))
		break;
		case 'multiply': console.log(parseInt(a) * parseInt(b))
		break;
		case 'divide': console.log(parseInt(a) / parseInt(b))
		break;
		case 'remainder': console.log(parseInt(a) % parseInt(b))
		break;
		case 'exp': math.pow(a,b)
		break;
	}
};

calculator(process.argv[3], process.argv[4]);


// var a = parseInt(process.argv[2]);
// var b = parseInt(process.argv[3]);



// console.log((a - 0) + (b - 0));
// console.log((a - 0) - (b - 0));
// console.log((a - 0) * (b - 0));
// console.log((a - 0) / (b - 0));