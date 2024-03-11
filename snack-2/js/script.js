/* --------------------------------------------------------------------------
   Il software deve chiedere per 5 volte all’utente di inserire un numero.
   - Il programma stampa la somma di tutti i numeri inseriti.
-------------------------------------------------------------------------- */
/*
// Creo un ciclo for
// - Chiedo all'utente di inserire un numero per 5 volte
// - Sommo tutti i numeri
// Stampo la somma
*/
// Variabili
let numberSum = 0;
// Funzinalità
for (let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);
    numberSum += userNumber;
}
// Output
alert('La somma è: ' + numberSum);