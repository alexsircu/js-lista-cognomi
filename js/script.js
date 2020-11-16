// Lista Cognomi
// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.


var cognomi = ["Rossi", "Ferrari", "Russo", "Bianchi", "Gallo"];
var nuovoCognome = prompt("Inserisci il tuo cognome");
cognomi.push(nuovoCognome);

var cognomiOrdinati = cognomi.sort();
console.log(cognomiOrdinati);

document.getElementById("text").innerHTML = cognomiOrdinati.join(", ");

for (var i = 0; i < cognomiOrdinati.length; i++) {
}
