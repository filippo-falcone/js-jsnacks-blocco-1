/* --------------------------------------------------------------------------------
   Dato un array contenente 10 numeri, stampare in console il numero più grande.
-------------------------------------------------------------------------------- */
/*
// Creo un array
// Cerco il numero più grande
// Stampo il numero più grande
*/
// Variabili
const numberList = [15, 25, 48, 5, 88, 12, 1, 16, 100, 50];
const numberLarge = Math.max(...numberList); // Applicazione trovata su mdn
// Output
alert('Il numero più grande è: ' + numberLarge);
console.log(numberLarge);