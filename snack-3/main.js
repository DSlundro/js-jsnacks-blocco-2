// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

let nome    = ['Bianca', 'Fablo', 'Jesus', 'Maria', 'Pippo', 'Pluto']
let cognome = ['Falito', 'Escobar', 'de Nazaret', 'Magdalena', 'Pippa bene', 'in Lutto']


for (let i = 0; i < nome.length; i++){

    randomNome = nome[Math.floor(Math.random() * nome.length)];
    randomCognome = cognome[Math.floor(Math.random() * cognome.length)];
    console.log(randomNome + ' ' + randomCognome)
}

