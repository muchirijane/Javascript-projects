/*

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.


Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � 

*/

//Solution 
/*
const markWeight = 78;
const markHeight = 1.69; // 2.8224

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight/ markHeight **2; // 27.309968138370508
const johnBMI = johnWeight/ johnHeight **2; // 24.194608809993426
console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI; //true
console.log(markHigherBMI);
*/

//Data 2
/*
const markWeight = 95;
const markHeight = 1.88; // 

const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight/ markHeight **2; // 26.87867813490267
const johnBMI = johnWeight/ johnHeight **2; // 27.44059917355372
console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI; // false
console.log(markHigherBMI);
*/


/**
 * Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 

*/

/*

const markWeight = 78;
const markHeight = 1.69; // 2.8224

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = Math.floor(markWeight/ markHeight **2); // 27.309968138370508
const johnBMI = Math.floor(johnWeight/ johnHeight **2); // 24.194608809993426
console.log(markBMI);
console.log(johnBMI);

// //Task one
// if (markBMI > johnBMI) {
//   console.log('Mark\'s BMI is higher than John\'s!');
// }else{
//   console.log('John\'s BMI is lower than Mark\'s!');
// }

//Task two
if (markBMI > johnBMI) {
  console.log(`Mark\'s BMI is (${markBMI}) higher than John\'s (${johnBMI})!`);
}else{
  console.log(`John\'s BMI is (${johnBMI}) higher than Mark\'s (${markBMI})!`);
}

*/

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/

// /****DATA 1 */

/*
// solution 1
const dolphinsAvg = Math.floor((96 + 108 + 89) / 3);
const koalasAvg = Math.floor((88 + 91 + 110) / 3);
console.log (dolphinsAvg, koalasAvg);


// //solution 2
if(dolphinsAvg > koalasAvg){
  console.log(`Dolphin wins with an avg score of ${dolphinsAvg}`);
}else if(dolphinsAvg === koalasAvg){
  console.log(`Dolphin's and Koalas team draw`);
}else{
  console.log(`Koalas team wins with an avg score of ${koalasAvg}`);
}

//solution Bonus 1 and bonus 2
if(dolphinsAvg > koalasAvg && dolphinsAvg >= 100){
  console.log(`Dolphin wins with an avg score of ${dolphinsAvg}`);
}else if(dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100){
  console.log(`Dolphin's and Koalas team draw`);
}else if(koalasAvg > dolphinsAvg && koalasAvg >= 100){
  console.log(`Koalas team wins with an avg score of ${koalasAvg}`)
}else{
  console.log(`No team wins`);
}

*/
//Coding challenge # 4

/*
Steven wants to build a very simple tip calculator for whenever he  goes eating
in a restaturant. In this country it's usual to tip 15% if the bill value is between
50 and 300. If the value is different, the tip is 20%

1. Your task is to calculate the tip, depending on the bill value. Create
a variable called 'tip' for this. It's not allowed to use an if/else statement
(If it's easier for you, you can start with an if/ else statement, and then try
to convert it to a ternary operatory!)

2. Print a string to the console containing the bill
value, the tip, and the final value (bill + tip). 
Example: 'The bill was 275, the tip was 41.25, 
and the total value 316.25

TEST DATA: Test for bill value 275, 40, 430
*/
//Task 1
const bill = 275;
// if (bill >= 50 &&  bill < 300){
//   console.log((15 * bill)/ 100);
// }else{
//   console.log((20 * bill)/ 100)
// }

// const tip = bill> 50 && bill< 300 ? (15 * bill)/ 100 : (20 * bill)/ 100;
// console.log(tip)

//Task 2 
const tip = bill >=50 && bill< 300 ? (15 * bill)/ 100 : (20 * bill)/ 100;
const total = bill >= 50 && bill< 300 ? `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}` : ` The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}` ;
console.log(total);