Javascript has dynamic typing - You can easily change the type of the value stored in the variable.

you don't have to manually define the data type of the value stored in the variable. They are defined automatically. Remember the value has the data type, not the variable.

Primitive data types are data that are not objects and has no methods.

1. All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

## Types of Primitive Data

### 1. Numbers - They are point numbers. Used for decimals and integers.

```jsx
Let score = 20;
console.log(typeof score);
//Output => number
```

### 2. String - They are a multiple characters, used to rep form text data. (sequence of characters)

```js
let name = "Jane Tracy";
console.log(typeof name);
//Output => string
```

### 3. Boolean - They are take logical values. They value can be `True` or `false`. Used for taking decisions.

```js
let preminumCustomers = true;
console.log(typeof preminumCustomers);
//Output => boolean
```

### 4. Undefined - Where the variable is defined but it has an empty value.

```js
let job;
console.log(job);
console.log(typeof job); //udefined
```

### 5. Null - Null is an assignment value, you can assign it to a variable. This means the value is blank or empty.

```js
let job = null;
console.log(job); // null
console.log(typeof job); //object
```

### 6. Symbol - Value cannot be changed and is unique. Hence they are immutable data.

```js
let userSymbol = Symbol("😍");
console.log(typeof userSymbol); //symbol

let nameSymbol = Symbol("😍");

console.log(userSymbol === nameSymbol); //false
```

### 7. BigInt - They hold large integers bigger than they can hold.

---
