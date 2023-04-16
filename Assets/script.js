// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let specialCharacters = ['!','@','#','$','%','^','&','*',')','(','+','=','?']

let password = "";
function generatePassword(){
let validCharacters = []
  if (confirm("Do you want your password to contain lowercase letters?")) 
  {
    validCharacters =  validCharacters.concat(lowerAlphabet)

  }
  if (confirm("Do you want your password to contain uperercase letters?")) 
  {
    validCharacters = validCharacters.concat(upperAlphabet)

  }
  if (confirm("Do you want your password to contain special characters?")) 
  {
    validCharacters =  validCharacters.concat(specialCharacters)

  }
  if (confirm("Do you want your password to contain numbers?")) 
  {
    validCharacters = validCharacters.concat(numbers)

  }
  console.log (validCharacters);

  let passwordLength =prompt("how long do you want the password?")

  if (passwordLength < 8 || passwordLength > 128){
    alert("Please provide a number between 8 & 128")
    return "Try Again"
  }
  
  for (let i = 0; i < passwordLength; i++){
    const generateLetterIndex = Math.floor(Math.random() * validCharacters.length);
    const randomCharacter = validCharacters[generateLetterIndex];
    password += randomCharacter;

  }
 
  return password;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

  return ;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









