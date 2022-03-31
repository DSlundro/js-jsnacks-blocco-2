// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.



let numeroUtente;
let somma = 0;
/* let i = 0;


for (let i = 0; i < 5; i++){

    numeroUtente = prompt('Inserisci un numero');
    console.log(numeroUtente);

    somma += Number(numeroUtente);
    
}

console.log(somma)
 */

 //  while   
let i = 0;
while (i < 5){

    numeroUtente = prompt('Inserisci un numero');
    console.log(numeroUtente);

    somma += Number(numeroUtente);
    i++
}

console.log(somma)


