// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Input Format

// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers describing an array of numbers .

// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeroes in the array compared to its size.
// Sample Input

// 6
// -4 3 -9 0 4 1
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array.


function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var positive = 0;
    var negative = 0;
    var zeroes = 0;
    // arr = [ -4, 3, -9, 0, 4, 1 ]

function compared(item){
  if(item>0){positive++}
  if(item<0){negative++}
  if(item===0){zeroes++}
}
arr.forEach(compared);
console.log((positive/arr.length).toFixed(6))
console.log((negative/arr.length).toFixed(6))
console.log((zeroes/arr.length).toFixed(6))
}