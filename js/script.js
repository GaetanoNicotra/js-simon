// RECUPERO GLI ELEMENTI DAL DOM
debugger;
let numbersList = document.getElementById('numbers-list');



// CREO UN CICLO FOR PER GENERARE 5 NUMERI RANDOMICI DA INSERISRE NELLA UL

for (i = 0; i <= 5; i++) {
    let randomNumbers = Math.floor(Math.random() * 5) + 1;
console.log(randomNumbers)
    numbersList += `<li>${randomNumbers}</li>`
}