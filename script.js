// Easy
// function name: getOddNumbers
// function params: none
// funcionality: filters over our array and returns a odd number 
const getOddNumbers = () => {
  const arr = [2, 4, 7, 11, 15, 16];
  let the_odds = arr.filter(number => number % 2 == 1);
  return the_odds;
}

// function name: getOddNumbers
// function params: none
// funcionality: filters over our array and returns a even number 
const getEvenNumbers = () => {
  const arr = [2, 4, 7, 11, 15, 16];
  let the_evens = arr.filter(number => number % 2 == 0);
  return the_evens
}

// Results
console.log(getEvenNumbers())
console.log(getOddNumbers())


//Easy 2 
// function name: isPrime
// function params: one; element
// funcionality: checking if our element has a remainder of 1 and zero and logging our results 
function isPrime(element) {
  for(var i = 2; i < element; i++) {
  if(element % i === 0) {
  return false;
  }
  }
  return element !== 1;
  }
  var array = [1, 5, 17, 25, 30];
  var primes = array.filter(isPrime);
  console.log("array: " + array);
  console.log("primes: " + primes);
//-------------------------------/

// Medium 1
// function name: vowelChecker
// function params: one; x
// funcionality: converts x to lowercase and we are looking for our first string or 0 to be what we speciify with our conditional 
function vowelChecker(x) {
    // vowelChecker will grab the first letter (character)...
    var firstChar = x.toLowerCase().charAt(0);
    // Then check if that first letter is a vowel.
    if (
      firstChar === "a" ||
      firstChar === "e" ||
      firstChar === "i" ||
      firstChar === "o" ||
      firstChar === "u"
    ) {
      // If so... it will log that.
      console.log("This is a vowel");
    } else {
      // If not... it will log that.
      console.log("This is not a vowel");
    }
  }
  // Here we will execute our function by Calling our vowelChecker function.
  vowelChecker("a");
  vowelChecker("b");

//-------------------------------/

// Medium 2
// function name: isAnagram
// function params: two; str1 str2
// funcionality: Checks if str1 is not equal to str2 
// str1 and str2 is convereted to lowercase and then it's split into a new array it's then sorted alphabetically and the join returns our array as a string
// string1 === string2 is checking to see if there are the data type and value
  function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let string1 = str1.toLowerCase().split('').sort().join('');
    let string2 = str2.toLowerCase().split('').sort().join('');
    return string1 === string2
}
console.log(isAnagram('abcdef', 'AbcFed'));
console.log(isAnagram('abcdef', 'AbcFel'));

//-------------------------------/

//Medium 3 
// function name: gcd_two_numbers
// function params: two; x, y
// funcionality: checking if x and y is not equal to a 'number' 
// math.abs() is checking for the absolute value of a number
// the while loop is checking to see if x is modulus by y
function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(gcd_two_numbers(336, 360));
console.log(gcd_two_numbers(78, 126));

//-------------------------------/

//Medium 4 
// Our object with Carlos` car 
let car = {
  make: 'Ram',
  model: '1500',
  year: '2017',
  mileage: '2000',
  color: 'gray'
}

// Methods that will refer to our object car with `this`
car.driveToWork = function(){
  let oldMiles = 62000; 
  console.log(`Old miles ${this.mileage} new miles ${oldMiles}`)
}

car.driveAroundTheWorld = function(){
  let oldMiles = 24000;
  console.log(`Old miles ${this.mileage} new miles ${oldMiles}`)
}

car.runErrands = function(){
  let oldMiles = 30000;
  console.log(`Old miles ${this.mileage} new miles ${oldMiles}`)
}
// Invoking the methods
car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();

// Hard 
// function name: isValid
// function params: one; s
// funcionality: creating an object with our special brackets
// creating a empty array
// loop over our empty array and pushing our bracket values
// if there is a value that is not equal to our bracket it is removed otherwise we return the length of our arr
let isValid = function(s){
  let bracket = {
    '(':')',
    '[':']',
    '{':'}',
  } 
  let arr = [];
  for (let char of s){
    if (bracket[char]){
      arr.push(bracket[char])
    }else {
      if (arr.pop() !== char) return false
    }
  } return (!arr.length)
}
console.log(isValid("()"))
console.log(isValid("(]"))


