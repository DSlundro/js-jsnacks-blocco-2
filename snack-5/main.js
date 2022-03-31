// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


let arrayOne = [1, 3, 5, 7, 9, 11,];
console.log(arrayOne);

let arrayTwo = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(arrayTwo);

let userNumber;

while (arrayOne.length != arrayTwo.length) {

    if (arrayOne.length < arrayTwo.length){
        userNumber = Number(prompt('Aggiungi un numero!'));
        let addNumber = arrayOne.push(userNumber);
        console.log(addNumber)
    }

    else if(arrayTwo.length < arrayOne.length){
        userNumber = Number(prompt('Aggiungi un numero!'));
        let addNumber = arrayTwo.push(userNumber);
        console.log(addNumber)
    }
}

console.log('La lunghezza di Array 1 è ' + arrayOne.length)
console.log('La lunghezza di Array 2 è ' + arrayTwo.length)

