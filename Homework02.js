/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/
console.log("\n------------EXERCISE 1------------\n");
/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
let num = [1, 3, 6, 8, 9];
console.log("\n------------EXERCISE 2------------\n");
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
let person = {
  name: "Sidath",
  surname: "Dabare",
  email: "example1@email.com",
  age: 35,
};
console.log("\n------------EXERCISE 3------------\n");
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
person.hasDrivingLicense = true;
console.log(person);
console.log("\n------------EXERCISE 4------------\n");
/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
delete person.age;
console.log(person);
console.log("\n------------EXERCISE 5------------\n");
/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
let person1 = {
  name: "Jhon",
  surname: "Doe",
  email: "example@email.com",
  age: 35,
};
if (person.email == person1.email) {
  console.log("Same email");
} else {
  console.log("Different email");
}
console.log("\n------------EXERCISE 6------------\n");
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
let totalShoppingCart = 50;
let amountSpent = 41;
if (amountSpent > totalShoppingCart) {
  console.log("Free shipping");
} else {
  console.log("Shipping cost $10");
}

console.log("\n------------EXERCISE 7------------\n");
/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
let discount = (amountSpent / 100) * 20;
let newTotal = discount + amountSpent;
if (amountSpent > totalShoppingCart) {
  console.log("Free shipping for total more than $: " + newTotal);
} else {
  console.log("Your total $: " + newTotal + "+ Shipping cost $10");
}
console.log(newTotal);
console.log("\n------------EXERCISE 8------------\n");
/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
let car = {
  brand: "BMW",
  model: "5siries",
  licensePlate: "DD6666GG",
};

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
