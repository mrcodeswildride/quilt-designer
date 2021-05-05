let square1 = document.getElementById(`square1`)
let square2 = document.getElementById(`square2`)
let square3 = document.getElementById(`square3`)
let square4 = document.getElementById(`square4`)
let square5 = document.getElementById(`square5`)
let square6 = document.getElementById(`square6`)
let square7 = document.getElementById(`square7`)
let square8 = document.getElementById(`square8`)
let square9 = document.getElementById(`square9`)

let patternButton = document.getElementById(`patternButton`)
let boatButton = document.getElementById(`boatButton`)
let dogButton = document.getElementById(`dogButton`)
let imageParagraph = document.getElementById(`imageParagraph`)

let rotation90Button = document.getElementById(`rotation90Button`)
let rotation180Button = document.getElementById(`rotation180Button`)
let rotation270Button = document.getElementById(`rotation270Button`)
let rotationParagraph = document.getElementById(`rotationParagraph`)

let selectedImage
let selectedRotation

square1.addEventListener(`click`, changeSquare)
square2.addEventListener(`click`, changeSquare)
square3.addEventListener(`click`, changeSquare)
square4.addEventListener(`click`, changeSquare)
square5.addEventListener(`click`, changeSquare)
square6.addEventListener(`click`, changeSquare)
square7.addEventListener(`click`, changeSquare)
square8.addEventListener(`click`, changeSquare)
square9.addEventListener(`click`, changeSquare)

patternButton.addEventListener(`click`, selectPattern)
boatButton.addEventListener(`click`, selectBoat)
dogButton.addEventListener(`click`, selectDog)

rotation90Button.addEventListener(`click`, select90)
rotation180Button.addEventListener(`click`, select180)
rotation270Button.addEventListener(`click`, select270)

function changeSquare() {
  this.style.backgroundImage = `url("${selectedImage}")`
  this.style.transform = `rotate(${selectedRotation})`
}

function selectPattern() {
  selectedImage = `pattern.jpg`
  imageParagraph.innerHTML = `Selected image: pattern`
}

function selectBoat() {
  selectedImage = `boat.jpg`
  imageParagraph.innerHTML = `Selected image: boat`
}

function selectDog() {
  selectedImage = `dog.jpg`
  imageParagraph.innerHTML = `Selected image: dog`
}

function select90() {
  selectedRotation = `90deg`
  rotationParagraph.innerHTML = `Selected rotation: 90 degrees`
}

function select180() {
  selectedRotation = `180deg`
  rotationParagraph.innerHTML = `Selected rotation: 180 degrees`
}

function select270() {
  selectedRotation = `270deg`
  rotationParagraph.innerHTML = `Selected rotation: 270 degrees`
}
