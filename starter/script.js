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
var passArray = '';

getPasswordOptions() //INITIAL CALL     !!!!!!!!!!111"£$£%$645656432425

// Function to prompt user for password options
function getPasswordOptions() {
  function getLength() {
    var promptLength = prompt('Password Length: (Passwords MUST be between 10 and 60 characters long)');
    console.log(promptLength, ':   input password length');
    return promptLength
  }
  function getSpex() {
    var confSpex = confirm('Include special characters?');
    console.log(confSpex, ':   inc specials')
    return confSpex
  }
  function getNums() {
    var confNums = confirm('Include numbers?');
    console.log(confNums, ':   inc numbers');
    return confNums
  }
  function getCaps() {
    var confCaps = confirm('Include upper-case characters?');
    console.log(confCaps, ':   inc caps');
    return confCaps
  }
  function getLowC() {
    var confLowC = confirm('Include lower-case characters?');
    console.log(confLowC, ':   inc lowcase')
    return confLowC
  }
  options = [getLength(), getSpex(), getNums(), getCaps(), getLowC()]
  return options
}

var pChoice = { //Object containing user inputs\\
  length: options[0],
  specials: options[1],
  numbers: options[2],
  capitals: options[3],
  lower_case: options[4]
}
// Function for getting a random element from an array

function randomize(array) {
  randRes = Math.floor(Math.random() * array.length);
  return array[randRes]
}

console.log(randomize(numericCharacters), 'lcc')
//Gives random index# for array

//password string declaration



var allChars = []

if (pChoice.specials) {
  allChars.push(specialCharacters)
};
if (pChoice.numbers) {
  allChars.push(numericCharacters)
};
if (pChoice.capitals) {
  allChars.push(upperCasedCharacters)
};
if (pChoice.lower_case) {
  allChars.push(lowerCasedCharacters)
};

// for (element of passArray) {
for (i = 0; i < pChoice.length; i++) {

  passArray += randomize(randomize(allChars));

}

console.log(passArray, passArray.length, 'resulting array')
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
