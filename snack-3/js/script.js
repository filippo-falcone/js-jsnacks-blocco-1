/* ---------------------------------------------------------
   Crea un array vuoto.
   - Chiedi per 6 volte all’utente di inserire un numero,
   - se è dispari inseriscilo nell’array.
--------------------------------------------------------- */
/*
// Creo un array vuoto
// Creo un ciclo for
// - Chiedo all'utente di inserire un numero per 6 volte
// - Verifico se è pario o dispari
// -- Se è dispari lo aggiungo all'array
*/
// Varabili
const numberList = [];
// Funzionalità
for (let i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);
}