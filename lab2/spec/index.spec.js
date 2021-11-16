let Math = require("../index");
var counter = {
  currentValues: function () {
    return 1;
  },
};

describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;
  beforeAll(() => {
    pos_vals = [2, 1, 3];
    neg_vals = [-2, -1, -1];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });

  beforeEach(() => {
    console.log(vals, sum_of_vals);
  });

  afterEach(() => {
    console.log("done");
  });

  afterAll(() => {
    pos_vals = 0;
    neg_vals = 0;
    vals = 0;
    sum_of_vals = 0;
  });
  it("sum function should equal to sum of the values", () => {
    expect(Math.sum(vals)).toEqual(sum_of_vals);
  });

  it("positive function should equal to positive values", () => {
    expect(Math.positive(vals)).toEqual(pos_vals);
  });
});

function sumOfValues() {
  return counter.currentValues();
}

describe("mock && spy", function () {
  it("spy", function () {
    counter.currentValues = jasmine.createSpy(100);
    expect(sumOfValues()).toEqual(counter.currentValues());
    expect(counter.currentValues).toHaveBeenCalledTimes(1);
  });
});
