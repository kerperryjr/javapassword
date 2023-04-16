# javapassword

Java Password is a place were you can come and generate a random password. With your choice of lower and upper case characters, numbers, & the length. As long as its between 8-128 characters. 
Code below is characters & numbers code
    let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let specialCharacters = ['!','@','#','$','%','^','&','*',')','(','+','=','?']


Java Password will prompt you with a series of questions. 
Such as this code below
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


Once all the questions are answered you will recieve a randomize password.

