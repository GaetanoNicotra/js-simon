// RECUPERO GLI ELEMENTI DAL DOM

let numbersList = document.getElementById('numbers-list');

// CREO UN CICLO FOR PER GENERARE 5 NUMERI RANDOMICI DA INSERISRE NELLA UL

for (i = 0; i < 5; i++) {

    let randomNumbers = Math.floor(Math.random() * 98) + 1;
    console.log(randomNumbers)

    const li = document.createElement('li')

    li.append(randomNumbers[i])
    console.log(li)
    numbersList.appendChild(li)
}