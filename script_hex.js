// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeLowerCase, includeUpperCase, includeNumeric, includeSpecialChars, generatedRandomNumber;
var passwd = '';
var optionsArray;

var Numeric = [48, 57];
var upperCase = [65, 90];
var lowerCase = [97, 122];
var specialChars = [32, 47, 58, 64, 91, 96, 123, 126];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //don't print anything if the user clicks cancel
  if (password !== false) {
    passwordText.value = password;
  }
}

function generatePassword() {
  // Initialise both password and optionsArray to blank
  optionsArray = [];
  passwd = '';

  // Function for checking the password length
  var length = validateUserEntry();
  
  if (length < 0) {
    return false;
  }
  
  // loop until at least one choice is selected
  while (!checkUserChoices()) {
    window.alert("Invalid choice.\n\nSelect at least one option.");    
  }
  
  for (var i = 0; i < length; i++) {
    generatedRandomNumber = Math.abs(Math.floor(Math.random() * 93 + 32))
    // if (!includeLowerCase) {

    // }
    passwd += String.fromCharCode(generatedRandomNumber);
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

function validateUserEntry() {
  var length = window.prompt("Length of password (8-128)", "8");
  // Keep prompting until user enters a valid length value
  // the last condition catches the non-numeric values
  while (length < 8 || length > 128 || !(typeof (length*1) === 'number' && !isNaN(length*1))) {
    //cathes the case where the user clicks cancel
    if (length === null) {
      return -1;
    }
    length = window.prompt("Invalid input '" +length+"'\n\nLength of password (8-128)", "8")
  }
  
  if (length === null) {
    return -1;
  }

  return length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
