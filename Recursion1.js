// Write a program and recurrence relation to find the Fibonacci series of n where n>2 
// Input: n = 5 
// Output:
// Fibonacci series of 5 numbers is : 0 1 1 2 3

const range = [0, 1];  

function fib(num) {  
  for (let index = 2; index < num; index++) {  
    range[index] = range[index - 1] + range[index - 2];  
  }  
  return range
}  

const num = 10;  
const fibSeries = fib(num);  

console.log(`Fibonacci series up to ${num} terms:`);  
console.log(fibSeries.join(', '));

