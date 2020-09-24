// var alphabetHigher = alphabetLower.toUpperCase();
// console.log(alphabetHigher);
// toUpperCase function doesn't work on arrays, so for now:
var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetHigher = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var characters = ["!","@","#","$","%","^","&","*"];
var passLengthString = 8 //just for now

// choose function var go here

var aLChoice = 0
var aHChoice = 0
var numChoice = 0
var charChoice = 0

// concatenate, it's a wonderful phrase, it means no worries for the rest of your days
var charArr = [ alphabetLower, alphabetHigher, numbers, characters ]

function aLChoose(){
    aLChoice = Math.floor(Math.random() * alphabetLower.length);
    return aLChoice;
}
function aHChoose(){
    aHChoice = Math.floor(Math.random() * alphabetHigher.length);
    return aHChoice;    
}
function numChoose(){
    numChoice = Math.floor(Math.random() * numbers.length);
    return numChoice;
}
function charChoose(){
    charChoice = Math.floor(Math.random() * characters.length);
    return charChoice;
}


function generatePassQuestions(){
    var passLengthString = prompt("How long would you like your password to be? Must be between 8 and 128 characters");
        passLengthString = parseInt(passLengthString,10);
        console.log(passLengthString);
        passLow = confirm("Use lowercase letters?");
        passHigh = confirm("Use uppercase letters?");
        passNum = confirm("Use numeric characters?");
        passSpec = confirm("Use special characters?")

    if (passLengthString < 8 || passLengthString > 128){
            alert("Password must be between 8 and 128 characters")
            generatePassQuestions()
        } else if (passLengthString === Null){
            alert("You must enter a number between 8 and 128")
            generatePassQuestions()
        } else if (passLow === false && passHigh === false && passNum === false && passSpec === false){
            alert("You must choose at least one type of character for your password")
            generatePassQuestions();
        } else {
            generatePassActual();
        }
    
    

}

// just putting these here so i dont have to scroll for now
// passLow passHigh passNum passSpec

function generatePassActual(){
    for ( i = 0; i < passLengthString; i++) {
        
        // how to store this functions choice for each i
        // maybe an array that this function pushes to each time it runs?
        // [i[x]]  ??



    }

}
// generatePassActual()
aLChoose()
console.log(aLChoice)
aHChoose()
console.log(aHChoice)
numChoose()
console.log(numChoice)
charChoose()
console.log(charChoice)



// var button = document.getElementById("buttonActual").addEventListener("click", function()
   



