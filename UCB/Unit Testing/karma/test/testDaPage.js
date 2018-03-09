var expect = require("chai").expect;
var should = require("chai").should();
var pageUtilities = require("../src/PageUtilities");

describe("page_utilities", function(){
    var page_utilities = new pageUtilities(10,3);

    // it("should keep track of how many pages are in the blog", function(){
    //     page_utilities.posts.should.equal(10);
    //     expect(page_utilities.posts).to.equal(10);
    // });

    // it("should keep track of the blogs pagination limit", function(){
    //     expect(page_utilities.pagination).to.equal(3);
    // });

    // it("should keep track of the blogs total page count", function(){
    //     expect(page_utilities.totalPages()).to.equal(4);
    // });
})