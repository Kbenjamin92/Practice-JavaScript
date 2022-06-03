// Write a JavaScript function to check whether an `input` is a string or not.

const isString = (str) => (typeof str === "string" ? true : false);
console.log(isString("string"));

// Write a JavaScript function to check whether a string is blank or not.

const isStrBlank = value => !value.length;
console.log(isStrBlank(""));

// Write a JavaScript function to split a string and convert it into an array of words.

const stringToArray = (value) => value.split(' ');
console.log(stringToArray("kipp logan benjamin jr")); 

// Write a JavaScript function to extract a specified number of characters from a string.

const extractStr = (value, num) => {
  let newArr = [];
  for (let i of value) newArr.push(i);

  let count = 0;
  while(num > count) {
   newArr.pop();
   count++
 }
  return newArr.join('').toString();
}
console.log(extractStr('Benjamin', 5));
