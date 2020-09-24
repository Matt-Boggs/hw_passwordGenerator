var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetHigher = alphabetLower.toUpperCase();
console.log(alphabetHigher);
// toUpperCase function doesn't work on arrays
var numbers = [0,1,2,3,4,5,6,7,8,9];
var characters = ["!","@","#","$","%","^","&","*"];


function generatePass(){
    var passLengthString = prompt("How long would you like your password to be? Must be between 8 and 128 characters");
        passLengthString = parseInt(passLengthString,10);
        console.log(passLengthString);
    if (passLengthString < 8 || passLengthString > 128){
            alert("Password must be between 8 and 128 characters")
            generatePass()
        } else if (passLengthString === NaN){
            alert("You must enter a number between 8 and 128")
            generatePass()
        }
    
    

}

// generatePass()



// var button = document.getElementById("buttonActual").addEventListener("click", function()
   



