

// Översätter bildnamn till bilnamn
const carImages = {
  "img-1.png": "Volvo",
  "img-2.png": "Tesla",
  "img-3.png": "Volkswagen",
  "img-4.png": "Blixten",
};

const carInfo = {
  'Volvo': 'En sketen bil hittad på skroten. Köparen fick betalt 1000 kr för att ta med sig skiten hem.',
  'Tesla': 'Man kan tro att denna bilen är eldriven, men tittar du riktigt noga så ser du dieselgeneratorn som står i bakluckan.',
  'Volkswagen': 'The Peoples Car, byggd av vedervärdiga människor,åt ännu sämre människor.',
  'Blixten': 'När du undrar var din mamma är, då är Blixten inte långt ifrån henne'
}

// Taggarna output-text och output-container återfinns i HTML-filen
let outputContainer = document.getElementById("text-output-container");
let outputText = document.getElementById("output-text");
let carImage = document.getElementById("image-output-container");
let title = (document.title = "JavaScript FTW!");
let btn1 = document.getElementById("button-1");
let btn2 = document.getElementById("button-2");
let btn3 = document.getElementById("button-3");
let btn4 = document.getElementById("button-4");

// Man kan t ex ställa färgen på ett område
outputContainer.style.backgroundColor = "None";

// Informationstext i den vänstra rutan
let infoText = "Möjliga bilar:<br><br>";
let brandArray = ["Volvo", "Tesla", "Volkswagen", "Blixten"];

for (let i = 0; i < brandArray.length; i++) {
  infoText += `Bil #${i + 1}: ${brandArray[i]}` + "<br>";
}

infoText += "<br>Klicka i rutan för att dra en slumpad bil!";

// Här sker själva textutmatningen
outputContainer.innerHTML = infoText;

// Knappraden
btn1.textContent = "Volvo";
btn2.textContent = "Tesla";
btn3.textContent = "Volkswagen";
btn4.textContent = "Blixten";



function specs() {
  infotext =
}

// Funktion som slumpar fram en ny bild
function newCar() {
  // Slumpar fram en bil (ett tal mellan 1 och 3)
  let randomNumber = Math.floor(Math.random() * brandArray.length);
  // Skapar bildnamnet
  let currentImage = `img-${randomNumber + 1}.png`;
  console.log(currentImage);

  // Visar bild och text
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;
}



// Lägger till en EventListener till outputContainer
outputContainer.addEventListener("click", newCar);


