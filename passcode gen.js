// Assignment Code
var generateBtn = document.querySelector("#generate");
 
function generatePassword() {
    // ask the user if how many characters they want to use
    var chars = window.prompt(
        "how many characters do you want your password to be?"
    );
 
    // ask user if they want to use numbers
    var nums = window.confirm("do you want to use numbers?");
 
    // ask user if they want to use upper case characters
    var upper = window.confirm("do you want to use upperCase characters?");
 
    // ask user if they want to use upper case characters
    var lower = window.confirm("do you want to use lowerCase characters?");
 
    // ask user if they want to use symbols
    var symbol = window.confirm("do you want to use symbols?");
 
    // print user input to see what they entered
    console.log(chars);
    console.log(nums);
    console.log(upper);
    console.log(lower);
    console.log(symbol);
 
    number_string = "1234567890";
    lower_string = "abcdefghijklmnopqrstuvqxyz";
    upper_string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    symbols_string = '!@#$%^&*()_+-=;:"[{]}';
 
    // temporary string to hold password options
    password_string = "";
 
    // generate the password options string
    if (nums) {
        password_string += number_string;
    }
 
    if (upper) {
        password_string += upper_string;
    }
 
    if (lower) {
        password_string += lower_string;
    }
 
    if (symbol) {
        password_string += symbols_string;
    }
 
    console.log("password generation string: " + password_string);
 
    // converts user input from a string to an integer
    length = parseInt(chars);
    var my_password = "";
    // generates custom generated password based on the password options string
    for (var i = 0, n = password_string.length; i < length; ++i) {
        my_password += password_string.charAt(Math.floor(Math.random() * n));
    }
    console.log("your password password: " + " " + my_password);
 
  return my_password
}
 
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
 
    passwordText.value = password;
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);