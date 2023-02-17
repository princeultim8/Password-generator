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

console.log(specialCharacters);
// Array of numeric characters to be included in password
var numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
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

// There are multiple arrays. How to store those arrays into one array?
// A new variable is created to store the concatenation of all of the given arrays to store it as one array -- This is to so that it is easier to access all of the elements
let array = upperCasedCharacters + lowerCasedCharacters + numericCharacters + specialCharacters;
console.log(array);

// Global Variables
// How to provide the user options>
// The task is to provide password options for the user and allow customisation depending on their preferences
let PwRequest = prompt("How many characters would you like your password to be?");
let upperChar = confirm("Would you like to include Uppercase Characters in your password? (OK = yes, cancel = no)");
let lowerChar = confirm("Would you like to include Lowercase Characters in your password?(OK = yes, cancel = no)");
let numChar = confirm("Would you like to include Numbers in your password?(OK = yes, cancel = no)");
let specialChar = confirm("Would you like to include Special Characters in your password?(OK = yes, cancel = no)");

// Function to prompt user for password options
function getPasswordOptions() {
  // This is to determine if the user input is an integer. If the passed value is a number value then the function proceeds, if not, the function loops through the block of code again.
  console.log(PwRequest);
  while (isNaN(PwRequest) || PwRequest < 10 || PwRequest > 65) {
    if (PwRequest === null || PwRequest < 10 || PwRequest > 65) {
      return;
    }
    alert("Please enter a value between 10 and 65.");
    PwRequest = prompt("How many characters would you like your password to be?");
  }
// An if statement to verify through the user inputs to see is the value for each character type is either true or false.
  if (!upperChar && !lowerChar && !numChar && !specialChar) {
    alert("Please select at least one character type.");

  }
}
getPasswordOptions();


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// calls back the variable 'array' and stores it in a new variable 'arr', which is also used as a parameter for the function
let arr = array;
console.log(getRandom(arr));



// Function to generate password with user input
function generatePassword() {
  // Create a new variable and store the randomly generated values as a string
  let password = "";
  let characterArray = [];

  // Verify's each password option and add the values to the empty array if it is true.
    if (lowerChar === true) {
      characterArray = characterArray.concat(lowerCasedCharacters);
    } else {
      console.log("Not added lower characters")
    }
    if (upperChar === true) {
      characterArray = characterArray.concat(upperCasedCharacters);
    } else {
      console.log("Not added uppercase characters")
    }
    if (numChar === true) {
      characterArray = characterArray.concat(numericCharacters);
    } else {
      console.log("Not added numbers")
    }
    if (specialChar === true) {
      characterArray = characterArray.concat(specialCharacters);
    } else {
      console.log("Not added any special characters")
    }

    // User inputs a value to determine how many characters they would like for their password
    // The for loop generates values up until the value the user has set e.g., user inputs '10', the code loops 10 times, and generates 16 characters.

    for (var i = 0; i < PwRequest; i++) {
      // The password variable is called and the getRandom() function is called, using characterArray as a parameter
      // This takes in the elements stored in characterArray and randomizes a series of values to be stored in 'password'
      password = password + getRandom(characterArray);
    }

    return password;

  }






// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);