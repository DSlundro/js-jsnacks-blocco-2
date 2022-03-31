// Crea un array di numeri interi 
// fai la somma di tutti gli elementi che sono in posizione dispari


let listaNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(listaNumeri);

let somma = 0;
let i = 0;

while(i < listaNumeri.length){
    let numero = listaNumeri[i]

    if(i % 2 != 0){
        somma += Number(numero);
    }

    i++
}

console.log('La somma dei numeri in posizioni dispari è ' + somma)



