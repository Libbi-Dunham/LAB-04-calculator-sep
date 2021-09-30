// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, sub, div } from '../calculations.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('div function', (expect) => {
    const input1 = 10;
    const input2 = 5;
    const expected = 2;

    const actual = div(input1, input2);

    expect.equal(actual, expected);

});

