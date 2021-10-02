// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, sub, div, mul } from '../calculations.js';

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

test('mul function', (expect) => {
    const input1 = 10;
    const input2 = 5;
    const expected = 50;

    const actual = mul(input1, input2);

    expect.equal(actual, expected);

});

test('add function', (expect) => {
    const input1 = 10;
    const input2 = 5;
    const expected = 15;

    const actual = add(input1, input2);

    expect.equal(actual, expected);

});

test('sub function', (expect) => {
    const input1 = 10;
    const input2 = 5;
    const expected = 5;

    const actual = sub(input1, input2);

    expect.equal(actual, expected);

});

test('div function', (expect) => {
    const input1 = 10;
    const input2 = 5;
    const expected = 2;

    const actual = div(input1, input2);

    expect.equal(actual, expected);

});


