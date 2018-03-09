var expect = require("chai").expect;
var namesFunction = require("../src/namesFunction");

describe("formatNames", function(){
    it("should return one name if only one name in array with period", function(){
        expect(formatNames['one name']).to.equal('one name.');
    });

    it("should return an '&' between two names in the names array and a period", function(){
        expect(formatNames['one name', 'second name']).to.equal('one name & second name.');
    });

    it("should return two names witha comma between, then an '&' before the last name", function(){
        expect(formatNames['one name', 'second name', 'third name']).to.equal('one name, second name & third name');
    });
});