var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
var square7 = document.getElementById("square7");
var square8 = document.getElementById("square8");
var square9 = document.getElementById("square9");

var noBackgroundButton = document.getElementById("noBackground");
var patternButton = document.getElementById("pattern");
var boatButton = document.getElementById("boat");
var dogButton = document.getElementById("dog");
var selectedBackgroundParagraph = document.getElementById("selectedBackground");

var rotation0Button = document.getElementById("rotation0");
var rotation90Button = document.getElementById("rotation90");
var rotation180Button = document.getElementById("rotation180");
var rotation270Button = document.getElementById("rotation270");
var selectedRotationParagraph = document.getElementById("selectedRotation");

var selectedBackground = "";
var selectedRotation = "";

square1.addEventListener("click", selectSquare);
square2.addEventListener("click", selectSquare);
square3.addEventListener("click", selectSquare);
square4.addEventListener("click", selectSquare);
square5.addEventListener("click", selectSquare);
square6.addEventListener("click", selectSquare);
square7.addEventListener("click", selectSquare);
square8.addEventListener("click", selectSquare);
square9.addEventListener("click", selectSquare);

noBackgroundButton.addEventListener("click", setNoBackground);
patternButton.addEventListener("click", setPattern);
boatButton.addEventListener("click", setBoat);
dogButton.addEventListener("click", setDog);

rotation0Button.addEventListener("click", setRotation0);
rotation90Button.addEventListener("click", setRotation90);
rotation180Button.addEventListener("click", setRotation180);
rotation270Button.addEventListener("click", setRotation270);

function selectSquare() {
    this.style.backgroundImage = selectedBackground ? 'url("' + selectedBackground + '")' : "";
    this.style.transform = selectedRotation ? "rotate(" + selectedRotation + "deg)" : "";
}

function setNoBackground() {
    selectedBackground = "";
    selectedBackgroundParagraph.innerHTML = "Selected image: none";
}

function setPattern() {
    selectedBackground = "pattern.jpg";
    selectedBackgroundParagraph.innerHTML = "Selected image: pattern";
}

function setBoat() {
    selectedBackground = "boat.jpg";
    selectedBackgroundParagraph.innerHTML = "Selected image: boat";
}

function setDog() {
    selectedBackground = "dog.jpg";
    selectedBackgroundParagraph.innerHTML = "Selected image: dog";
}

function setRotation0() {
    selectedRotation = 0;
    selectedRotationParagraph.innerHTML = "Selected rotation: 0 degrees";
}

function setRotation90() {
    selectedRotation = 90;
    selectedRotationParagraph.innerHTML = "Selected rotation: 90 degrees";
}

function setRotation180() {
    selectedRotation = 180;
    selectedRotationParagraph.innerHTML = "Selected rotation: 180 degrees";
}

function setRotation270() {
    selectedRotation = 270;
    selectedRotationParagraph.innerHTML = "Selected rotation: 270 degrees";
}
