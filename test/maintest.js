var csp = require("../index");
var should = require("should");


it("should have a function called hasPerm", ()=>{
  csp.has.should.not.equal(undefined);
})
describe("hasPerm function", ()=>{
  it("should return true if array contains * at any place", ()=>{
    csp.hasPerm([
      "*"
    ], "test.node").should.equal(true);

    csp.hasPerm([
      "testing.test",
      "*"
    ], "test.node").should.equal(true)

    csp.hasPerm([
      "testing.test",
      "*",
      "test123"
    ], "test.node").should.equal(true)
  })
  it("should return false if the array is empty", ()=>{
    csp.hasPerm([

    ], "test.node").should.equal(false)
  })
})