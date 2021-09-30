import { add } from './calculations.js';
console.log(add);

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-btn');
const addAnswer = document.getElementById('add-answer');

console.log(addInput1, addInput2, addButton, addAnswer);

addButton.addEventListener('click', ()=>{
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    console.log(result);
    addAnswer.textContent = result;
}); 

import { sub } from './calculations.js';
console.log(sub);

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-btn');
const subAnswer = document.getElementById('sub-answer');

console.log(subInput1, subInput2, subButton, subAnswer);

subButton.addEventListener('click', ()=>{
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);
    const result = sub(value1, value2);
    console.log(result);
    subAnswer.textContent = result;
}); 


import { div } from './calculations.js';
console.log(div);

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-btn');
const divAnswer = document.getElementById('div-answer');

console.log(divInput1, divInput2, divButton, divAnswer);

divButton.addEventListener('click', ()=>{
    const value1 = Number(divInput1.value);
    const value2 = Number(divInput2.value);
    const result = div(value1, value2);
    console.log(result);
    divAnswer.textContent = result;
}); 

import { mul } from './calculations.js';
console.log(mul);

const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');
const mulButton = document.getElementById('mul-btn');
const mulAnswer = document.getElementById('mul-answer');

console.log(mulInput1, mulInput2, mulButton, mulAnswer);

mulButton.addEventListener('click', ()=>{
    const value1 = Number(mulInput1.value);
    const value2 = Number(mulInput2.value);
    const result = mul(value1, value2);
    console.log(result);
    mulAnswer.textContent = result;
}); 