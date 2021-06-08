const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {

describe("announceDawn", () =>{

it ("returns a rooster call", () => {

//setup - Defined expected output
  const expected = "cock-a-doodle-doo!";

  // Excercise - call Rooster.announceDawn and store result in variable
  const actual = Rooster.announceDawn();

  // Verify - using an assert method to compare actual and expted result
  assert.equal(actual, expected);

});
});
  describe (".timeAtDawn", () => {

    it ("returns its argument as a string", () => {

      // Setup
      const inputNumber = 11;
      const expected = "11"

      //Exercise
      const actual = Rooster.timeAtDawn(inputNumber);

      //Verify
      assert.equal(actual, expected);
    });

it("throws a range error if passed a number less than 0", () => {

  //setup
  const inputNumber = -2;
  const expected = RangeError;

  //Verify
  assert.throws(() =>{
    //exercise is here
    Rooster.timeAtDawn(inputNumber);
  }, expected);
});

it("throws a range error if passed a number greater than 23", () => {

  //setup
  const inputNumber = 26;
  const expected = RangeError;

  //Verify
  assert.throws(() =>{
    //exercise is here
    Rooster.timeAtDawn(inputNumber);
  }, expected);
  });
});
});