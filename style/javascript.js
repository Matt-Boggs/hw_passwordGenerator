// var alphabetHigher = alphabetLower.toUpperCase();
// console.log(alphabetHigher);
// toUpperCase function doesn't work on arrays, so for now:
var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetHigher = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var characters = ["!","@","#","$","%","^","&","*"];
var charArr = [ alphabetLower, alphabetHigher, numbers, characters ];
var passLengthString = 8; //just for now
var passLengthInteger = 8; //just for now
// 
var passLow = false;
var passHigh = false;
var passNum = false;
var passSpec = false;

// choose function var go here

var aLChoice = 0;
var aHChoice = 0;
var numChoice = 0;
var charChoice = 0;

// 
var passFinal = [];
var passFinal = "";
var output = document.getElementById("output").textContent
// concatenate, it's a wonderful phrase, it means no worries for the rest of your days

// these choose a random number to use as an index position to pull a char from
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

function generateCharChoose(){
    passLow = confirm("Use lowercase letters?");
    console.log(passLow);
    passHigh = confirm("Use uppercase letters?");
    console.log(passHigh);
    passNum = confirm("Use numeric characters?");
    console.log(passNum);
    passSpec = confirm("Use special characters?");
    console.log(passSpec);

    if (passLow === false && passHigh === false && passNum === false && passSpec === false){
        alert("you must choose at least one character")
        generateCharChoose();
    } else (generatePassActual)

    
}


function generatePassQuestions(){
    var passLengthString = parseInt(prompt("How long would you like your password to be? Must be between 8 and 128 characters"),10);
        console.log(passLengthString)
        // passLengthInteger = parseInt(passLengthString,10); // I'm not sure why this doesnt work
        passLengthInteger = passLengthString
        console.log(passLengthInteger);
        

        // (passLow === false && passHigh === false && passNum === false && passSpec === false)


        // (passLengthString === null)"You must enter a number between 8 and 128"
    if (passLengthInteger === null || passLengthInteger === NaN){
            alert("You must enter a number between 8 and 128");
            generatePassQuestions();
        }
    else if (passLengthInteger < 8 || passLengthInteger > 128){
            alert("Password must be between 8 and 128 characters");
            generatePassQuestions();
        }
    else (generateCharChoose())
   
        
        
}

function generatePassActual(){
    for ( i = 0; i < passLengthString; i++) {

        if (passLow === true){
            aLChoose();
            return aLChoice;
        }
        else if (passHigh === true){
            aHChoose();
            return aHChoice;
        }
        else if (passNum === true){
            numChoose();
            return numChoice;
        }
        if (passSpec === true){
            charChoose();
            return charChoice;
        }
       
        
        // how to store this functions choice for each i
        // maybe an array that this function pushes to each time it runs?
        // [i[x]]  ??



    }

}

// just putting these here so i dont have to scroll for now
// passLow passHigh passNum passSpec


// generatePassActual()
console.log(aLChoice)
console.log(aHChoice)
console.log(numChoice)
console.log(charChoice)
 
// generatePassQuestions()
// generatePassActual()


var button = document.getElementById("buttonActual").addEventListener("click", function(){
    generatePassQuestions();
})
   



