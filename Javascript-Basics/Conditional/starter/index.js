
// const age = 18

// age >= 18 ? console.log('I can drink now!!') : console.log('You have to be 18 yrs to drink');

// const age = 18;
// const drive = age
//   ? `I am ${age} years, I can drive now!! 😎`
//   : `I am ${age} years, I can't drive yet😥`;

// console.log(drive);

//conditionals inside template literals

const age = 15;
const drive = age >= 18
  ? `I am ${age} years, I can drive now!! 😎`
  : `I am ${age} years, I can't drive yet😥`;

console.log(drive);

const legalAge = 15;
console.log(`I would like to ${legalAge >= 18 ? 'wine 🍷' : 'water 💧'}`);
