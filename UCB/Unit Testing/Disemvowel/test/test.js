var expect = require("chai").expect;
var disemvowel = require("../disemvowel.js");

describe("Disemvowel", function(){
	it("should remove all vowels from lowercase strings", function(){
		expect(disemvowel("this is lowercase")).to.equal("ths s lwrcs")
	});
});

