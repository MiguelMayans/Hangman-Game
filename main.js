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
let img = document.querySelector(".img_main_container")

// Asginamos valor a cada tecla pulsada
/*let keys = document.querySelectorAll('input[type="button"]');
keys.forEach((key) => {
    key.addEventListener("click", (event) => {
        let selectedKey = event.target.value
        console.log(selectedKey)
    });
})
*/

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

    wordsplited.forEach((letter) => {
        letter = "_"
        spaceGuessLetter.textContent += letter
    });


    // Esto es una prueba
    let keys = document.querySelectorAll('input[type="button"]')

    keys.forEach((key) => {
        key.addEventListener("click", (event) => {
            let selectedKey = event.target.value
            console.log(selectedKey)

            for (let i = 0; i < wordsplited.length; ++i) {

                if (wordsplited[i].includes(selectedKey)) {
                    wordsplited[i] = selectedKey


                } else if (!wordsplited[i].includes(selectedKey)) {
                    wordsplited[i] = "_"
                }
            }
            spaceGuessLetter.textContent = wordsplited.join("")
        });
    })
}