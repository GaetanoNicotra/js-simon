// RECUPERO GLI ELEMENTI DAL DOM

let numbersList = document.getElementById('numbers-list');

// CREO UN CICLO FOR PER GENERARE 5 NUMERI RANDOMICI DA INSERISRE NELLA UL

for (i = 0; i < 5; i++) {

    let randomNumbers = Math.floor(Math.random() * 53) + 1;

    const li = document.createElement('li')
    li.append(randomNumbers)
    numbersList.appendChild(li)
}

// USO LE TIMING FUNCTION PER CREARE IL COUNTDOWN DI 30 SECONDI

// RECUPERO O DICHIARO GLI ELEMENTI E VARIABILI CHE MI SERVONO 
let time = 4;
const countdown = document.getElementById('countdown')
countdown.innerText = time--;
const formControl = document.querySelectorAll('.form-control')
const answersForm = document.getElementById('answers-form')
const message = document.getElementById('message')


const countdownScreen = setInterval(function () {

    if (time != -1) {
        countdown.innerText = time
    }
    else {
        clearInterval(countdownScreen)
        numbersList.remove()
        answersForm.classList.remove('d-none')
    }
    time--;
    console.log(formControl.innerText)
    console.log(randomNumbers)
    if (formControl.innerText == randomNumbers) {
        message.innerText('Hai indovinato')
        console.log('true')
    }

    else {
        message.innerText('hai sbagliato')
        console.log('false')
    }

}, 1000)

