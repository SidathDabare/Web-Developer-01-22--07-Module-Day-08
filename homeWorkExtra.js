// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
console.log("\n------------EXTRA 1------------\n");

/* WRITE YOUR ANSWER HERE */
let numbers = [1, 3, 5];
console.log(numbers.reverse());

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/
console.log("\n------------EXTRA 2------------\n");
/* WRITE YOUR ANSWER HERE */
const array1 = [1, 3, 2, 7, 9, 23, 5];
let max = 0;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] > max) {
    max = array1[i];
  }
  //console.log(array1[i]);
  //console.log(array1[i], "is samaller than", max);
}
console.log("maximum number is ", max);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/
console.log("\n------------EXTRA 3------------\n");
/* WRITE YOUR ANSWER HERE */
const array2 = [8, 3, 2, 7, 9, 23, 5];
let min = array2[0];
for (let i = 1; i < array2.length; i++) {
  if (array2[i] < min) {
    min = array1[i];
  }
  //console.log(array2[i]);
  //console.log(array1[i], "is greter than", min);
}
console.log("minimum number is ", min);

// console.log(Math.min(...array1));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
console.log("\n------------EXTRA 4------------\n");

/* WRITE YOUR ANSWER HERE */
const array3 = [8, 3, 2, 4, 9, 23, 5];
for (let i = 0; i < array3.length; i++) {
  if (array3[i] % 2 == 1) {
    console.log(array3[i]);
  }
}

// console.log(students);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
console.log("\n------------EXTRA 5------------\n");

/* WRITE YOUR ANSWER HERE */

const array4 = [8, 3, 2, 4, 9, 23, 5, 11, 6, 17, 7];

for (let i = 0; i < array4.length; i++) {
  if (array4[i] % 2 == 1) {
    console.log(array4[i]);
    delete array4[i];
    //array4.splice(array4[i]);
  }
}
console.log(array4);
/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
console.log("\n------------EXTRA 6------------\n");
/* WRITE YOUR ANSWER HERE */
// const str = "The quick brown fox jumps over a lazy dog";
// const vowels = str.match(/[aeiou]/gi);
// const consonants = str.match(/[^aeiou]/gi);
// vowels.concat([""], consonants).forEach((k) => {
//   console.log(k);
// });

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
console.log("\n------------EXTRA 7------------\n");

/* WRITE YOUR ANSWER HERE */
let array5 = [1, 3, 2, 7, 9, 23, 5];
for (let index = 0; index < array5.length; index++) {
  array5[index] += 1;
}
console.log(array5);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
console.log("\n------------EXTRA 8------------\n");
/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
