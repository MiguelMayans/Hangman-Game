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

let btn = document.querySelector('.form__btn');
let input = document.querySelector('.form__input');
let userList = document.querySelector('#users_li');
let homeContainer = document.querySelector('.form_container')
let gameContainer = document.querySelector(".game_container")


btn.addEventListener('click', addUserName);
let myArray = []; /* Dentro de la array tienen que ir objetos */

function addUserName() {
    event.preventDefault()
    /*Coge el valor del input*/
    let myObject = {
        name: input.value,
    };

    /*Meter objeto dentro de la array */
    myArray += JSON.stringify(myObject);

    /*Meter objeto dentro del localStorage*/
    localStorage.setItem("user-name", (myArray))
    console.log(myArray)

    /*Copia en users scores */
    let newElement = document.createElement('li');
    newElement.textContent = myObject.name;
    userList.appendChild(newElement);

    /* display form__container */
    homeContainer.style.display = 'none';
    gameContainer.style.display = "block";
}