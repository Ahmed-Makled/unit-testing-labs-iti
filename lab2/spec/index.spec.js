let Math = require('../index');
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
  
    // at before all assign pos vals with array of positive numbers,
  
    // and assign negative vals with negative array of numbers,
  
    // assign vals to pos_vals.concat(neg_vals);
  
    // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));

    beforeAll(()=>{
        pos_vals = [2,4,6,5,7,9,5,4,1,2,4,5];
        neg_vals = [-1,-5,-6,-8,-9,-7,-8,-4];
        vals = pos_vals.concat(neg_vals);
        sum_of_vals = vals.reduce((x,y)=> x + y , 0);
    })
    
    // at before each console.log all vals

    beforeEach(()=>{
        console.log(vals , sum_of_vals);
    })
    // at after each console.log done

    afterEach(()=>{
        console.log("done");
    })
    // at after all set all variables to 0

    afterAll(()=>{
        pos_vals = 0;
        neg_vals = 0;
        vals = 0;
        sum_of_vals = 0
    })
    it("sum function should equal to sum of the values", () => {
        expect(Math.sum(vals)).toEqual(sum_of_vals);
    });
  
    it("positive function should equal to positive values", () => {

        expect(Math.positive(vals)).toEqual(pos_vals);
    });
  });

  //----------------------------------------------------------------------------------------------------------------

function sumOfValues() {
    return counter.currentValues();
}
   
describe("mock and spy", function () {
     
     
     
    it("spying", function () {
      //spy on counter object currentValue property and mock its implementation to equal [100]
      counter.currentValues = jasmine.createSpy(100);
      // expect some of values is returning the right value (new mocked value 100) after mocking
      expect(sumOfValues()).toEqual(counter.currentValues());
      // and expect that we called the spy function for one time
      expect(counter.currentValues).toHaveBeenCalledTimes(1); // It was called 2 times so it gives a failure
    });
   
});
   