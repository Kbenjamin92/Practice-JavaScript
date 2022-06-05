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

// Write a JavaScript function to parameterize a string.

const connectStr = (value) => value.split('').join('-').toLowerCase();
console.log(connectStr('I Love My Wife'));

// closure

function outerParent(){
    const outerVar = 'outer';
    function innerChild(){
        console.log(outerVar);
    }
    innerChild();
}
outerParent();

// Event loop 

console.log(1);
setTimeout(() => console.log(2), 2000);
console.log(3);
setTimeout(() => console.log(4), 1000);


// function declaration
declaration();
function declaration(){
    console.log(1);
}

// function expression
const expression = function(){
    console.log(2);
}
expression();

// arrow function

const arrow = () => console.log(3);
arrow();