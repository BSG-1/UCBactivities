var fs = reqire("fs");

function function1("string", "someString", someFunction()){
	console.log('somestring', arguments[0])
	someFunction()
}


function myFunc(func, value){
	return function(){
		return func(value)
	}
}