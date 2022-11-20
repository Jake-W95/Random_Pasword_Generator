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


// password options object
var options = []


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
  options = [getLength(), getSpex(), getNums(), getCaps(), getLowC()]
  // console.log('array:options within getpasswordOptions: ', options)
  return options

}
// console.log('without', options)


// console.log('array(options) WITHOUT function(getPasswordOptions', getPasswordOptions())

var pChoice = {
  length: options[0],
  specials: options[1],
  numbers: options[2],
  capitals: options[3],
  lower_case: options[4]
}
console.log('object', pChoice)



// Function for getting a random element from an array
function getRandom(arr) {
  arr[Math.floor(Math.random() * arr.length)]
}


// Function to generate password with user input

var passString = []

function generatePassword() {
  password.length = pChoice.length;
  if (pChoice.specials) {
    passString += getRandom(specialCharacters)
  }
  if (pChoice.numbers) {
    passString += getRandom(numericCharacters)
  }
  if (pChoice.capitals) {
    passString += getRandom(upperCasedCharacters)
  }
  if (pChoice.lower_case) {
    passString += getRandom(lowerCasedCharacters)
  }

  return passString
}

console.log('test generate', passString)

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions() //INITIAL CALL     !!!!!!!!!!111"£$£%$645656432425

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);