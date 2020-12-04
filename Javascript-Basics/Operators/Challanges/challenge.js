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
