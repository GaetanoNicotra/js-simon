// RECUPERO GLI ELEMENTI DAL DOM

let numbersList = document.getElementById('numbers-list');

// CREO UN CICLO FOR PER GENERARE 5 NUMERI RANDOMICI DA INSERISRE NELLA UL

for (i = 0; i < 5; i++) {

    let randomNumbers = Math.floor(Math.random() * 98) + 1;

    const li = document.createElement('li')
    li.append(randomNumbers)
    numbersList.appendChild(li)
}

// USO LE TIMING FUNCTION PER CREARE IL COUNTDOWN DI 30 SECONDI

// RECUPERO O DICHIARO GLI ELEMENTI E VARIABILI CHE MI SERVONO 
let time = 10;
const countdown = document.getElementById('countdown')
countdown.innerText = time --;
const number = document.querySelectorAll('number')

const countdownScreen = setInterval(function () {

    if (time != -1) {
        countdown.innerText = time
    }
    else {
        clearInterval(countdownScreen)
        numbersList.innerText = number

    }
    time--;
}, 1000)

