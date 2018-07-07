const expect = require(`chai`).expect;
const fizzBuzz = require('../fizzBuzz');

describe(`fizzBuzz`, () => {
  it(`fizzBuzz exists`, function() {
    expect(fizzBuzz).to.be.ok;
  });
  it('can determine if a number is buzzable', function() {
    expect(fizzBuzz(10)).to.equal(`Fizz`);
  });
  it('determines if a number is FizzBuzz', function() {
    expect(fizzBuzz(45)).to.equal(`FizzBuzz`);
  });
  it('determines if a number is just fizzable', function() {
    expect(fizzBuzz(99)).to.equal(`Buzz`);
  });
  it(`number is not fizz or buzzable`, function() {
    expect(fizzBuzz(26)).to.equal(26);
  });
});
