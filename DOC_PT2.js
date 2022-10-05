// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
let gender = "male"
let algo = gender === "male" ? "you are male" : "you are NOT male"
console.log(algo)
/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
let number1 = 6
let number2 = 2
if (
  number1 === 8 ||
  number2 === 8 ||
  number1 + number2 === 8 ||
  number1 - number2 === 8
) {
  console.log("you have an 8")
} else {
  console.log("sorry no 8")
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let string1 = "9876"
let string2 = "54321"
let concateated = string1 + string2
console.log("this works out to be:", concateated)
/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let variable1 = 2123
let variable2 = 123
let variable3 = 21357

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/
let integer1 = 490
let integer2 = 245
average = (integer1 + integer2) / 2
console.log("your average is", average)
/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/
numberFor100fication = 556
percentIs = numberFor100fication / 100
numberForUsToFindPercentIN = 4
let percentOfThing = numberForUsToFindPercentIN / percentIs
console.log("your resulting percentage is", percentOfThing)
/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/
let YourNumberForClassification = 456
if (YourNumberForClassification % 2 === 0) {
  console.log("your number is even")
} else {
  console.log("your number is odd")
}
