##falsy
Falsy values are false values in boolean context
console.log(typeof 0n);

#### They include

- 0 - The number zero
- -0 - The number negative zero
- 0n - BigInt, when used as a boolean, follows the same rule as a Number. 0n is falsy.
- "" Empty string value
- null null - the absence of any value
- undefined undefined - the primitive value
- NaN NaN - not a number

#### Examples

console.log(Boolean(0));//falsy values
console.log(Boolean(''));//falsy values
console.log(Boolean(NaN));//falsy values
console.log(Boolean(0n));//falsy values
console.log(Boolean(-0)); //falsy value
