// RECUPERO GLI ELEMENTI DAL DOM

let numbersList = document.getElementById('numbers-list');

// CREO UN CICLO FOR PER GENERARE 5 NUMERI RANDOMICI DA INSERISRE NELLA UL
let randomNumbers = [];
for (i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;
    randomNumbers.push(randomNumber)
    const li = document.createElement('li')
    li.append(randomNumber)
    numbersList.appendChild(li)
}

// USO LE TIMING FUNCTION PER CREARE IL COUNTDOWN DI 30 SECONDI

// RECUPERO O DICHIARO GLI ELEMENTI E VARIABILI CHE MI SERVONO 
let time = 5;
const countdown = document.getElementById('countdown')
const number = document.querySelectorAll('.number')
const formControl = document.querySelectorAll('.form-control')
const answersForm = document.getElementById('answers-form')
const message = document.getElementById('message')
const button = document.querySelector('.button')
countdown.innerText = time--;
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


}, 1000)

button.addEventListener('click', function (event) {
    event.preventDefault()
  
    const risposte = [];
    for (let i = 0; i < formControl.length; i++) {
        risposte.push(parseInt(formControl[i].value));
    }

    const risposteCorrette = [];
    for (let i = 0; i < risposte.length; i++) {
        if (randomNumbers.includes(risposte[i])) {
            risposteCorrette.push(risposte[i]);
        }
    }



    if (risposteCorrette.length === 5) {
        message.innerText = 'Hai indovinato tutti i numeri!' + risposteCorrette;
    }

    else if (risposteCorrette.length > 0) {
        message.innerText = 'Hai indovinato solo:' + risposteCorrette;
     
    }
    else {
        message.innerText = 'Hai sbagliato! Ritenta';
    }
})
