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


function generatePassword() {

  var lowerCase = 'qwertyuiopasdfghjklzxcvbnm'
  var upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  var numbers = '0123456789'
  var unique = '~!@#$%^&*()_+-|[{=}]<>/'
  var stored = ''
  var localPass = ''
  var temporary = ''

  var passLength = Number(prompt('How long do you want it? (must be between 8 and 128)'));
  if (passLength < 8 || passLength > 128) {
    alert('Not valid, try again')
    passLength = Number(prompt('How long do you want it? (must be between 8 and 128)'));
  }
  console.log(stored);
  var userInput = confirm('Would you like lower case letters?');
  if (userInput) {
    stored = stored.concat(lowerCase);
  }
  console.log(stored);
  var userInput = confirm('Would you like capital letters?');
  if (userInput) {
    stored = stored.concat(upperCase);
  }
  console.log(stored);
  var userInput = confirm('Would you like numbers?');
  if (userInput) {
    stored = stored.concat(numbers);
  }
  console.log(stored);
  var userInput = confirm('Need unique symbols?');
  if (userInput) {
    stored = stored.concat(unique);
  }
  console.log(stored);
  for (var i = 0; i < passLength; i++) {
    temporary += stored[Math.floor(Math.random() * stored.length)];
    localPass.concat(stored[temporary]);

  } return temporary
}
