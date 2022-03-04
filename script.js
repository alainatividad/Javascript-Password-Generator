// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeLowerCase;
var includeUpperCase;
var includeNumeric;
var includeSpecialChars;
var passwd = '';
var generatedRandomNumber;
var optionsArray;

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
  if (length === null) {
    return false;
  }

  while (length < 8 || length > 128 || !(length.includes(0,1,2,3,4,5,6,7,8,9,0))) {
    length = window.prompt("Invalid input " +length+"\n\nLength of password (8-128)", "8")
    if (length === null) {
      return false;
    }
  }
  
  // loop until the user choices are valid
  while (!checkUserChoices()) {
    window.alert("Invalid choice.\n\nSelect at least one option.");    
  }
  
  for (var i = 0; i < length; i++) {
    generatedRandomNumber = Math.abs(Math.floor(Math.random() * 93+32))
    passwd += generatedRandomNumber+' '
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
