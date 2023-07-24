/*
### Normativa ###
. Cada uno responsable de su parte (no intromision)
. ';' -> Poner siempre
. Antes de finalizar una sección, presentar a equipo**
. Añadir un comentario en cada sección / apartado
*/

/* Create new element 
let newElement = document.createElement('li');
newElement.textContent = arrayResult;
ul.appendChild(newElement);*/

let btn = document.querySelector('.form__btn')
let input = document.querySelector('.form__input')
let userList = document.querySelector('#users_li')
let homeContainer = document.querySelector('.form_container')
let gameContainer = document.querySelector(".game_container")
let spaceGuessLetter = document.querySelector(".space_guess_letter")
let winGame = document.querySelector(".win_game")
let lostGame = document.querySelector(".lost_game")
let userScore = document.querySelector("#aside_section")

winGame.style.display = "none"
lostGame.style.display = "none"


btn.addEventListener('click', addUserName)
let myArray = []; /* Dentro de la array tienen que ir objetos */

function addUserName() {
    event.preventDefault()
    /*Coge el valor del input*/
    let myObject = {
        name: input.value,
    };

    /*Meter objeto dentro de la array */
    myArray += JSON.stringify(myObject)

    /*Meter objeto dentro del localStorage*/
    localStorage.setItem("user-name", (myArray))
    console.log(myArray)

    /*Copia en users scores */
    let newElement = document.createElement('li')
    newElement.textContent = myObject.name
    userList.appendChild(newElement)

    /* display form__container */
    homeContainer.style.display = 'none'
    gameContainer.style.display = "block"


    // Definir string de 4 letras
    let fourLetterString = ["oído", "oyes", "oyen", "ovni", "ovil", "ovar", "oval", "otro"]
    console.log(fourLetterString)

    //Elegimos una palabra random y la dividimos en letras
    let wordSelected = fourLetterString[Math.floor((Math.random() * fourLetterString.length))]
    let wordsplited = wordSelected.split("")

    console.log(wordSelected)
    console.log(wordsplited)


    let wordFound = wordsplited.map(() => "_").join("");
    spaceGuessLetter.textContent = wordFound;

    // Seteamos contadores a 0
    let wrongCounter = 0;
    let rightCounter = 0;
    let hangMan = 0;

    // Esto es una prueba
    let keys = document.querySelectorAll('input[type="button"]')

    // Asignamos cada valor a cada tecla pulsada
    keys.forEach((key) => {
        key.addEventListener("click", (event) => {
            let selectedKey = event.target.value
            let letterFound = false;
            console.log(selectedKey)

            for (let i = 0; i < wordsplited.length; ++i) {

                if (wordsplited[i] === selectedKey) {

                    wordFound = wordFound.substring(0, i) + selectedKey + wordFound.substring(i + 1);
                    letterFound = true
                    rightCounter++
                    console.log(rightCounter)
                }

            }
            if (!letterFound) {
                spaceGuessLetter.textContent = wordFound;
                wrongCounter++
                hangMan++
                console.log(wrongCounter)

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
        });
    })

    let img = document.querySelector(".img_main_container")








}

