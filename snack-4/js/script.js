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
let numberAverage = 0;
// Funzionalità
for (let i = 0; i < 10; i++) {
    numberSum += numberList[i];
    numberAverage = numberSum / numberList[i];
}
// Output
alert('La somma è: ' + numberSum);
console.log('somma', numberSum);
alert('La media è: ' + numberAverage);
console.log('media', numberAverage);