var bandList = require("./bands.js");



for (var prop in bandList) {
	console.log("A " + prop + " band is " + bandList[prop] + ".");
}