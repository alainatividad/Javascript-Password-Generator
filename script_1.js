// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeLowerCase;
var includeUpperCase;
var includeNumeric;
var includeSpecialChars;
var passwd;

var optionsArray;
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["1234567890"];
var specialCharacters = [" !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Initialise both password and optionsArray to blank
  optionsArray = '';
  passwd = '';

  var length = window.prompt("Length of password (8-128)", "8");
  // Keep prompting until user enters a valid length value
  while (length < 8 || length > 128) {
    length = window.prompt("Invalid input.\n\nLength of password (8-128)", "8")
  }
  
  // loop until the user choices are valid
  while (!checkUserChoices()) {
    window.alert("Invalid choice.\n\nSelect at least one option.");    
  }

  // create the character selection array
  // I decided to do this here so that I know that the user choices are valid
  if (includeLowerCase) {
    optionsArray += lowerCase;
  }
  
  if (includeUpperCase) {
    optionsArray += upperCase;
  }

  if (includeNumeric) {
    optionsArray += numbers;
  }

  if (includeSpecialChars) {
    optionsArray += specialCharacters;
  }

  console.log(optionsArray);
  
  for (var i = 0; i < length; i++) {
    // get the nth character of the optionsArray where n is a random number from 0 to optionsArray.length
    passwd += optionsArray.charAt(Math.abs(Math.floor(Math.random() * optionsArray.length+1)));
  }
  
  return passwd;
}

function checkUserChoices() {
  // Store user's choices
  includeLowerCase = (window.confirm("Do you want the password to have lower case characters?")) ? true : false
  includeUpperCase = (window.confirm("Do you want the password to have upper case characters?")) ? true : false
  includeNumeric = (window.confirm("Do you want the password to have numeric values?")) ? true : false
  includeSpecialChars = (window.confirm("Do you want the password to have special characters?")) ? true : false

  // return the combination of the choices
  return (includeLowerCase || includeUpperCase || includeNumeric || includeSpecialChars)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
