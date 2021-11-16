var expect = require("chai").expect;
var assert = require("chai").assert;
var should = require("chai").should();
const { capitalizeText, createArray } = require("../index");

describe("1)function capitalizeText", () => {
  it("takes a string  it will return a string", () =>
    assert.typeOf(capitalizeText("ahmed"), "string"));

  it("takes a string and return it after capitalize it", () =>
    expect(capitalizeText("iti")).to.equal("Iti"));

  it("takes number it will throw type error says parameter should be string", () => {
    expect(() => capitalizeText(55)).to.throw(
      TypeError,
      "parameter should be string"
    );
  });

  it("takes input iti , the returned value  will not equal to hello", () =>
    capitalizeText("iti").should.not.equal("hello"));
});

/*---------------------problem2----------------------*/

describe("2)function createArray", () => {
  let i = 0;
  beforeEach(() => {
    setTimeout(() => console.log(i++), 5000);
  });

  it("return value of type array", () =>
    createArray(13, 14).should.be.a("array"));

  it("pass 3 it will return array of length 3 and test it's include 1", () =>
    expect(createArray(3)).to.have.lengthOf(3).that.includes(1));

  describe.skip("padding test", function () {
    it("expect length 4", function () {
      expect(createArray(4)).to.have.lengthOf(4);
    });
  });
});
