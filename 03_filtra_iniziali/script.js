/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filtraParolePerInizio(names, lettera) {
  const paroleConIniziale = [];


  for (let i = 0; i < names.length; i++) {
    const parolaCorrente = names[i];


    if (parolaCorrente.startsWith(lettera)) {

      paroleConIniziale.push(parolaCorrente);

    }
  }

  return paroleConIniziale;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(filtraParolePerInizio(names, "A"))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
