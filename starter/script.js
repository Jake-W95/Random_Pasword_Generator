// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// password options object


// Function to prompt user for password options
function getPasswordOptions() {
  function getLength() {
    var promptLength = prompt('Password Length: (Passwords MUST be between 10 and 60 characters long)');
    console.log(promptLength);
    return promptLength
  }
  function getSpex() {
    var confSpex = confirm('Include special characters?');
    console.log(confSpex)
    return confSpex
  }
  function getNums() {
    var confNums = confirm('Include numbers?');
    console.log(confNums)
    return confNums
  }
  function getCaps() {
    var confCaps = confirm('Include upper-case characters?');
    console.log(confCaps)
    return confCaps
  }
  function getLowC() {
    var confLowC = confirm('Include lower-case characters?');
    console.log(confLowC)
    return confLowC
  }
var options = [getLength(),   getSpex(), getNums(), getCaps(), getLowC()]
console.log(options)
// return options
}
// var opt = options


// var passwordOptions = {
//   Length: opt[0],
//   specials: opt[1],
//   numbers: opt[2],
//   capitals: opt[3],
//   lower_case: opt[4]
// }
// console.log(opt)
// console.log(passwordOptions)


getPasswordOptions()




// console.log(passwordOptions)
// Function for getting a random element from an array
// function getRandom(arr) {
//   if (passwordOptions.specials) {
//     //get random values
//   }
//   if (passwordOptions.numbers) {
//     //get random values
//   }
//   if (passwordOptions.capitals) {
//     //get random values
//   }
//   if (passwordOptions.lower_case) {
//     //get random values
//   }

// }

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);