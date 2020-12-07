
//falsy
//falsy values are false values in boolean context
//console.log(typeof 0n);

/*
false	The keyword false
- 0	- The number zero
- -0 - 	The number negative zero
- 0n - 	BigInt, when used as a boolean, follows the same rule as a Number. 0n is falsy.
- ""	Empty string value
- null	null - the absence of any value
- undefined	undefined - the primitive value
- NaN	NaN - not a number
*/

//Examples
/*
console.log(Boolean(0));//falsy values
console.log(Boolean(''));//falsy values
console.log(Boolean(NaN));//falsy values
console.log(Boolean(0n));//falsy values
console.log(Boolean(-0)); //falsy value
*/
/*
const money = 100;

if(money) {
  console.log(`You have some money, spend it well!`);
}else{
  console.log(`You have no money`);
}
*/
let height; //undefined => falsy value

if(height){
  console.log('Yay! height is defined'); 
}else{
  console.log('Oh no! height is not defined')
}