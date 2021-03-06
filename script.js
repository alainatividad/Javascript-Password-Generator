// Assignment Code
var generateBtn = document.querySelector("#generate");

// Setting up variables
var includeLowerCase, includeUpperCase, includeNumeric, includeSpecialChars, passwd, optionsArray;
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["1234567890"];
var specialCharacters = [" !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //don't print anything on the textbox if the user clicks cancel
  if (password !== false) {
    passwordText.value = password;
  } else {
    // notify the user that the process is cancelled.
    window.alert("User has clicked cancel.")
  }
}

// Main function that calls the functions that validates the password length, character choice, and randomisation of characters
function generatePassword() {
  // Initialise both password and optionsArray to blank
  optionsArray = '';
  passwd = '';

  // Function for checking the password length
  var length = validateUserEntry();
  
  // If the user cancels, it would return false and not show any password on the screen
  if (length < 0) {
    return false;
  }
  
  // Function for creating the character choice string to use for password
  optionsArray = createUserChoiceArray()
  
  // If there is no character choice, return false
  if (optionsArray.length < 1) {
    return false;
  }

  // Function that generates the password based on the global optionsArray string and length from previous function
  passwd = generatePW(length);
  return passwd;
}

function validateUserEntry() {
  var length = window.prompt("Length of password (8-128)", "8");
  
  // Keep prompting until user enters a valid length value
  // value is invalid for the following cases:
  // - if the value is less than 8, or
  // - if the value is more than 128, or
  // - if the user clicked cancel (so the output of the prompt is NULL), or
  // - if the user entered a non-numeric value (length*1 (multiplying it to 1 converts the string into a number) should be a number that is not NaN)
  while (length < 8 || length > 128 || length === null || !(typeof (length*1) === 'number' && !isNaN(length*1))) {
    // If the user clicked cancel, return -1
    if (length === null) {
      return -1;
    }
    length = window.prompt("Invalid input '" +length+"'\n\nLength of password (8-128)", "8")
  }

  return length;
}

function createUserChoiceArray() {
  var optionsArray = '';
  // loop until the user choices are valid
  while (!checkUserChoices()) {
    window.alert("Invalid choice.\n\nSelect at least one option.");    
  }

  // create the character selection array
  // This is done outside the checkUserChoices function so that it is sure that the combination is valid
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

  return optionsArray;
}

function checkUserChoices() {
  // Store user's character choices to the global vars that would determine if they should be included in the optionsArray string
  includeLowerCase = (window.confirm("Do you want the password to have lower case characters?")) ? true : false
  includeUpperCase = (window.confirm("Do you want the password to have upper case characters?")) ? true : false
  includeNumeric = (window.confirm("Do you want the password to have numeric values?")) ? true : false
  includeSpecialChars = (window.confirm("Do you want the password to have special characters?")) ? true : false

  // return the combination of the stored choices; will return true if at least one is selected
  return (includeLowerCase || includeUpperCase || includeNumeric || includeSpecialChars)
}

function generatePW(length) {
  // create a local variable where the random characters would be stored before it completes the loop
  var passwd = '';  
  for (var i = 0; i < length; i++) {
    // get the nth character of the optionsArray string where n is a random number from 0 to optionsArray.length
    passwd += optionsArray.charAt(Math.abs(Math.floor(Math.random() * optionsArray.length)));
  }
  return passwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
