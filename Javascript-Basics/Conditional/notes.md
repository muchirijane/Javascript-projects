#### Statement vs expressions

Expression is used to return a value.
Statement performes an actions

#### In conditional operator

- Conditional operator has 3 parts.
- The condition itself
- The if statements
- The else part

example

```js
const age = 18;
age
  ? console.log(`I am ${age} years, I can drive now!! 😎`)
  : console.log(`I am ${age} years, I can't drive yet😥`);
```

- To turn a ternary operator to an experssion, you have to store in a variable.
  Example

```js
const age = 18;
const drive = age
  ? `I am ${age} years, I can drive now!! 😎`
  : `I am ${age} years, I can't drive yet😥`;

console.log(drive);
```
