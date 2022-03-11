// Denna JS-fil visar hur utdata från JS kan dirigeras till ett HTML-
// dokumentet istället för till konsol.

// Taggarna output-text och output-container återfinns i HTML-filen
let outputContainer = document.getElementById("text-output-container");
let outputText = document.getElementById("output-text");
let title = (document.title = "JavaScript FTW!");

// Man kan t ex ställa färgen på ett område
outputContainer.style.backgroundColor = "None";

// Nedan finns några exempel på operationer, vars resultat ska
// matas ut.
let myString;
let myNumber = 21 + 21;
let myFirstString = "Detta är en rad<br>";
let mySecondString = "som fortsätter med en annan rad<br>";
let myThirdString = `som avslutas med talet ${myNumber}.<br><br>`;
let myArray = ["Volvo", "Tesla", "Volkswagen"];

myString = myFirstString.concat(mySecondString);
myString = myString.concat(myThirdString);

for (let i = 0; i < myArray.length; i++) {
  myString += `Bil #${i + 1}: ${myArray[i]}` + "<br>";
}

// Här sker själva utmatningen
outputContainer.innerHTML = myString;
outputContainer.style.backgroundColor = "yellow"
