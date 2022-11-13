'use strict';
/////////////////////////////////////
//  Problem 1 (this is your demo that we'll solve in class)

// // Write your code here
function sum(a, b) { //eslint-disable-line
  console.log('in the sum function', a, b);
  let totalSum = a + b;
  let message = 'The sum of ' + a + ' and ' + b + ' is ' +totalSum + '.';
  console.log([totalSum]);
  return[totalSum, message];
}


testSum(4, 7);


/////////////////////////////////////
//  Problem 2

// Write your code here
function multiply(a, b) { //eslint-disable-line
  console.log('in the multiply function', a, b);
  let totalMultiply = a * b;
  let message = 'The product of ' + a + ' and ' + b + ' is ' +totalMultiply + '.';
  console.log([totalMultiply]);
  return[totalMultiply, message];
}

multiply(5,9);


testMultiply(5,9);


/////////////////////////////////////
//  Problem 3



// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line

  let sumNumber=  sum(sum(a,b)[0],c)[0];
  console.log('sum', sumNumber);
  let productNumber = multiply (multiply(a,b)[0] , c)[0];
  console.log(productNumber);
  let message1 = `${a} and ${b} and ${c} sum to ${sumNumber}.`;
  let message2 = `The product of ${a} and ${b} and ${c} is ${productNumber}.`;
  return [sumNumber, productNumber, message1, message2];
}
// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);


/////////////////////////////////////
//  Problem 4


let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  let sumArraySum = sum(sumArr[0],sum(sumArr[1],sumArr[2])[0]);
  console.log(sumArraySum[0]);
  let message3 = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${sumArraySum[0]} is their sum.`;
  console.log(message3);

  return [sumArraySum[0], message3];


}

sumArray(testArray);

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that
takes an array of numbers as its argument and
returns an array whose first element is the product of those numbers,
and the second element is a string that EXACTLY follows this example
and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function.
To do multiplication, use your multiply() function that you've already created.
You're going to have to be resourceful to figure out how to do this.
This function should handle an array containing three elements.
However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished,
uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line

  let multiplyArrayProduct = multiply(testArray[0],multiply(testArray[1],testArray[2])[0]);
  console.log(multiplyArrayProduct[0]);
  let message4 = `The numbers ${testArray[0]},${testArray[1]},${testArray[2]} have a product of ${multiplyArrayProduct[0]}.`;
  console.log(message4);

  return [multiplyArrayProduct[0], message4];

}

multiplyArray(testArray);


// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
