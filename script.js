//click event -> prompt for password criteria
//password criteria
//Length - 8-128 chars
//character type - lowercase, uppercase, numeric, special characters
//input should be validated, one character type must be selected
//paramaters are added and password is selected randomly
//password is displayed in either an alert or written to the page
// Assignment Code
let generateBtn = document.querySelector("#generate"); // selector for generate button
let passwordString = '';
let passwLength = '';
let shuffledPass = '';
let password = '';

// password length prompt
generateBtn.onclick = function pLength () {
  let passLength = prompt("Please choose password length (8-128)", "8");
  if (passLength >= 8 && passLength <= 128) {
    passwLength = passLength; // saves variable in higher scope to use later
    console.log(passwLength)
    lowercasePrompt();
  } else {
    alert("Please enter a number between 8 and 128");
    pLength();
  };
};

function lowercasePrompt() {
  let lowercaseChoice = prompt("Would you like your password to include lower case characters? Enter yes or no", "yes");
  if (lowercaseChoice === "yes") {
    passwordString = passwordString.concat("abcdefghijklmnopqrstuvwxyz")    //add lowercase letters to potential password string
    console.log(passwordString);
    uppercasePrompt();
  } else if (lowercaseChoice === "no") {
    console.log(passwordString);
    uppercasePrompt();
  } else {
    alert("Please enter 'yes' or 'no'");
    lowercasePrompt();
  };
};

function uppercasePrompt() {
  let uppercaseChoice = prompt("would you like your password to include upper case characters? Enter yes or no", "yes");
  if (uppercaseChoice === "yes") {
    passwordString = passwordString.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");   //add uppercase letters to potential password string
    console.log(passwordString);
    numbersPrompt();
  } else if (uppercaseChoice === "no") {
    console.log(passwordString);
    numbersPrompt();
  } else {
    alert("Please enter 'yes' or 'no'");
    uppercasePrompt();
  };
};

function numbersPrompt() {
  let numbersChoice = prompt("would you like your password to include numbers? Enter yes or no", "yes");
  if (numbersChoice === "yes") {
    passwordString = passwordString.concat("0123456789");    //add numbers to potential password string
    console.log(passwordString);
    specialPrompt();
  } else if (numbersChoice === "no") {
    console.log(passwordString);
    specialPrompt();
  } else {
    alert("Please enter 'yes' or 'no'");
    numbersPrompt();
  }
}

function specialPrompt() {
  let specialChoice = prompt("would you like your password to include special characters? Enter yes or no", "yes");
  if (specialChoice === "yes") {
    passwordString = passwordString.concat("`~!@#$%^&*()-_=+{[}]:;'|\<,>.?/");    //add uppercase letters to potential password string
    console.log(passwordString);
    generatingPassword();
  } else if (specialChoice === "no") {
    console.log(passwordString);
    generatingPassword();
  } else {
    alert("Please enter 'yes' or 'no'");
    specialPrompt();
  };
};

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;    // While there remain elements to shuffle Pick a remaining element And swap it with the current element. Found off google
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  };
  return array;
};

let randomItem = function(array) {    // function to get random item from an array
  let randomIndex = Math.floor(Math.random() * array.length)
  var item = array[randomIndex];
  return item;
};


function generatingPassword() {     // split compiled password string into an array
  let a = passwordString.split('');
  let b = shuffle(a);
  let generatePass = '';
  let counter = 0;
  do {    // choose a random character from the array and then add it to password string, repeating until counter = password length from step 1
    var letter = randomItem(b);
    generatePass = generatePass.concat(letter);
    counter++;
  } while (counter < passwLength);
  password = generatePass;
  alert("Generated password is" + generatePass);
  writePassword();
} 
  
// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  clearPass();
}

function clearPass() { // clears value of passwordstring incase user wants to use it again
  passwordString = "";
}