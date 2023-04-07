// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let password = "";
function generatePassword(){

  if (confirm("Do you want your password to contain lowercase letters?")) 
  {
    

  }
  if (confirm("Do you want your password to contain uperercase letters?")) 
  {
    

  }
  if (confirm("Do you want your password to contain numbers?")) 
  {
    

  }
  

  let passwordLength =prompt("how long do you want the password?")
  let generateLetterIndex = Math.floor(Math.random() *26);
  for (let i = 0; i < passwordLength; i++) 
  {
    
  
    password += "x";

  }
 
  return password;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  password.preventDefault();
  return ;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









