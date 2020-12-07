

const age = 18;

//if (age === 18) console.log('You are at a legal age');

if (age == '18') console.log('You are at a legal age');

console.log('18' === 18 ? 'It\'s true' : 'It\'s false'); // no coercion
console.log('18' == 18 ? 'It\'s true' : 'It\'s false'); // coercion


const number = Number(prompt('Guess a number?'));

console.log(number);

if (number ===70){
  console.log('Your guess is correct');
}else if(number === 58){
  console.log('Your guess is correct');
}else{
  console.log('Your guess is incorrect');
}

const legalAge = false;
const drivingLicense = true;

if(legalAge && drivingLicense) console.log('You are at a legal age'); //false

const legalAge = true;
const drivingLicense = true;

if(legalAge && drivingLicense) console.log('You are at a legal age'); //true

const legalAge = true;
const drivingLicense = true;
const tired = false;

//if(legalAge || drivingLicense) console.log('You are at a legal age'); //true

if (legalAge && drivingLicense && !tired) {
  console.log('You can drive 🥈')
}



