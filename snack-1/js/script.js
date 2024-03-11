/* --------------------------------------------------------------------------------------------------------------------------------------------------
   Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente)
-------------------------------------------------------------------------------------------------------------------------------------------------- */
/*
// Creo un array
// Creo un ciclo
// - Chiedo all'utente di inserire 5 numeri
// - Controllo se il numero non è gia presente
// - Lo inserisco nell'array
*/
// Variabili
const numberList = [];
// Funzionlità
for (let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);
}
// Output