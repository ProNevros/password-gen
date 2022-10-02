// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = (password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password code

// The function used for setting the parameters of the password

function generatePassword() {
  
  // All my global variables

  var lowerCase = 'qwertyuiopasdfghjklzxcvbnm'
  var upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  var numbers = '0123456789'
  var unique = '~!@#$%^&*()_+-|[{=}]<>/'
  var stored = ''
  var localPass = ''
  var temporary = ''

  // Calculating how the information will be stored

  var passLength = Number(prompt('How long do you want it? (must be between 8 and 128)'));
  if (passLength < 8 || passLength > 128) {
    alert('Not valid, try again')
    passLength = Number(prompt('How long do you want it? (must be between 8 and 128)'));
  }
  console.log(stored);
  var userInput1 = confirm('Would you like lower case letters?');
  if (userInput1) {
    stored = stored.concat(lowerCase);
  }
  console.log(stored);
  var userInput2 = confirm('Would you like capital letters?');
  if (userInput2) {
    stored = stored.concat(upperCase);
  }
  console.log(stored);
  var userInput3 = confirm('Would you like numbers?');
  if (userInput3) {
    stored = stored.concat(numbers);
  }
  console.log(stored);
  var userInput4 = confirm('Need unique symbols?');
  if (userInput4) {
    stored = stored.concat(unique);
  }

// Alert window that shows the users parameter choices

  console.log(stored);
  if (userInput1 = true) {
    var userInput1 = 'Yes'
  } else {
    var userInput1 = 'No'
  }
  if (userInput2 = true) {
    var userInput2 = 'Yes'
  } else {
    var userInput2 = 'No'
  }
  if (userInput3 = true) {
    var userInput3 = 'Yes'
  } else {
    var userInput3 = 'No'
  }
  if (userInput4 = true) {
    var userInput4 = 'Yes'
  } else {
    var userInput4 = 'No'

  }

  alert('Your parameters you have set are:\nPassword Length:' + passLength + '\nLower Case: ' + userInput1 + '\nUpper Case: ' + userInput2 + '\nNumbers: ' + userInput3 + '\nUnique Symbols: ' + userInput4);

  for (var i = 0; i < passLength; i++) {
    temporary += stored[Math.floor(Math.random() * stored.length)];
    localPass.concat(stored[temporary]);

  } return temporary
}
