var csp = require("../index");
var should = require("should");
it("should have a function called hasPerm", () => {
  csp.hasPerm.should.not.equal(undefined);
})
describe("hasPerm function", () => {
  it("should return true if array contains * at any place", () => {
    csp.hasPerm(["*"], "test.node")
      .should.equal(true);
    csp.hasPerm(["testing.test", "*"], "test.node")
      .should.equal(true)
    csp.hasPerm(["testing.test", "*", "test123"], "test.node")
      .should.equal(true)
  })
  it("should return false if the array is empty", () => {
    csp.hasPerm([], "test.node")
      .should.equal(false)
  })
  it("should return true if node is directly in array", () => {
    csp.hasPerm(["test.node"], "test.node")
      .should.equal(true)
  })
  it("should return true if node is included in a non top level * like test.*", () => {
    csp.hasPerm(["test.*"], "test.node")
      .should.equal(true)
    csp.hasPerm(["test.abc.*"], "test.abc.123")
      .should.equal(true);
    csp.hasPerm(["test.abc.123"], "text.xyz")
      .should.equal(false);
  })
  describe("negation", ()=>{
    it("should override wildcards and direct permissions", ()=>{
      csp.hasPerm(["*", "!test.xyz"], "text.xyz")
      .should.equal(false);
    })
    it("should support wildcards", ()=>{
      csp.hasPerm(["*", "!test.*"], "text.xyz")
      .should.equal(false);
    })
    
  })
})
