//Converting a number string into a number
const inputAge = '28';
console.log(Number(inputAge) + 20);

//You can't convert a string name into a numbers
console.log(Number('Tracy')); 
//out put NaN, it's not a number

// convert numbers into strings
let age = 20;
age = String(age);
console.log( age, typeof age);

//type coercion
/**
 * With the plus operators numbers are converted to strings,
 * But for the rest of the operators like (-, /, *) convert strings to numbers.
 */
console.log(' I have been a developer for ' + 2 + ' years now. 👩‍💻 ');

console.log('40' - '15' - 10); // 15
console.log('40' + '15' - 10); // 4005
console.log('40' + '15' + 10); // 101510
console.log('40' / '15' / 10); // 0.267
console.log('40' > 10); // true

let n = '1' + 1;
n = n -1;
console.log(n); //10