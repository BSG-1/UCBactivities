var expect = require("chai").expect;
var titleize = require("../titleize.js");

describe("Titleize", function(){
	it("should capitalize initial letter of each word in input", function(){
		expect(titleize("bahadur")).to.equal("Bahadur")
	});

	it("should append period to leading titles", function(){
		expect(titleize("dr bahadur")).to.equal("Dr. Bahadur")
	});

	it("should not change properly cased strings", function(){
		expect(titleize("Dr. Bahadur Singh")).to.equal("Dr. Bahadur Singh");
	});

	it("should properly case mixed case strings", function(){
		expect(titleize("dr bAhAduR")).to.equal("Dr. Bahadur");
	});
});

