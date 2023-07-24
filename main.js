/*
### Normativa ###
. Cada uno responsable de su parte (no intromision)
. ';' -> Poner siempre
. Antes de finalizar una sección, presentar a equipo**
. Añadir un comentario en cada sección / apartado
*/

let btn = document.querySelector('.form__btn')
let input = document.querySelector('.form__input')
let userList = document.querySelector('#users_li')
let homeContainer = document.querySelector('.form_container')
let gameContainer = document.querySelector(".game_container")
let spaceGuessLetter = document.querySelector(".space_guess_letter")
let winGame = document.querySelector(".win_game")
let lostGame = document.querySelector(".lost_game")
let userScore = document.querySelector("#aside_section")
let keys = document.querySelectorAll('input[type="button"]')
let img = document.querySelector(".img_main_container")

winGame.style.display = "none"
lostGame.style.display = "none"

let myArray = []; /* Dentro de la array tienen que ir objetos */

btn.addEventListener('click', addUserName)
// Creamos objeto 
function addUserName() {
    event.preventDefault()
    /*Coge el valor del input*/
    let myObject = {};
    myObject.name = input.value;
    myArray.push(myObject)
    console.log(myObject)

    /*Copia en users scores */
    let newElement = document.createElement('li')
    newElement.textContent = myObject.name
    userList.appendChild(newElement)

    let myObjectJSON = JSON.stringify(myArray)
    localStorage.setItem("user-name", myObjectJSON)

    /* display form__container */
    homeContainer.style.display = 'none'
    gameContainer.style.display = "block"
}

// Definir string de 4 letras
let fourLetterString = ["oído", "oyes", "oyen", "ovni", "ovil", "ovar", "oval", "otro"]

//Elegimos una palabra random y la dividimos en letras
let wordSelected = fourLetterString[Math.floor((Math.random() * fourLetterString.length))]
let wordsplited = wordSelected.split("")

let wordFound = wordsplited.map(() => "_").join("");
spaceGuessLetter.textContent = wordFound;

// Seteamos contadores a 0
let wrongCounter = 0;
let rightCounter = 0;
let hangMan = 0;

// Definimos el switch del Hangman

function updateHangman() {
    switch (hangMan) {
        case 1:
            img.setAttribute("src", "/assets/img/hangman-step1.jpeg")
            break
        case 2:
            img.setAttribute("src", "/assets/img/hangman-step2.jpeg")
            break
        case 3:
            img.setAttribute("src", "/assets/img/hangman-step3.jpeg")
            break
        case 4:
            img.setAttribute("src", "/assets/img/hangman-step4.jpeg")
            break
        case 5:
            img.setAttribute("src", "/assets/img/hangman-step5.jpeg")
            break
        case 6:
            img.setAttribute("src", "/assets/img/hangman-step6.jpeg")
            break
    }
}

// Asignamos cada valor a cada tecla pulsada
keys.forEach((key) => {
    key.addEventListener("click", (event) => {
        let selectedKey = event.target.value
        let letterFound = false;

        for (let i = 0; i < wordsplited.length; ++i) {

            if (wordsplited[i] === selectedKey) {
                wordFound = wordFound.substring(0, i) + selectedKey + wordFound.substring(i + 1);
                letterFound = true
                rightCounter++
                key.style.visibility = "hidden"
            }
        }

        if (!letterFound) {
            spaceGuessLetter.textContent = wordFound;
            wrongCounter++
            hangMan++
            updateHangman()
            key.style.visibility = "hidden"

        } else {
            spaceGuessLetter.textContent = wordFound;
        }

        if (wrongCounter === 6) {
            gameContainer.style.display = "none"
            lostGame.style.display = "block"
            userScore.style.display = "none"
        }

        if (!wordFound.includes("_")) {
            gameContainer.style.display = "none"
            winGame.style.display = "block"
            userScore.style.display = "none"
        }
    });
})



