// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.


let numeroUtente;

    numeroUtente = Number(prompt('Inserisci un numero'))

    if (numeroUtente % 2 == 0){
        console.log(`Il numero pari è ${numeroUtente} `)
    }
    else {
        numeroUtente += 1;
        console.log(`Il numero pari successivo è ${numeroUtente}`)
    }


    