/* ---------------------------------------------------
   Calcola la somma e la media dei primi 10 numeri.
--------------------------------------------------- */
/*
// Creo un array
// Creo un ciclo for
// - Calcolo la somma
// - Calcolo la media
// Stampo entrambe le
*/
// Variabili
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numberSum = 0;
// Funzionalità
for (let i = 0; i < 10; i++) {
    console.log(numberList[i]);
    numberSum += numberList[i];
}
// Output
console.log(numberSum);