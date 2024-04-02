/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In Javascript esistono 6 datatype di cui 5 sono detti "primitivi" e uno soltanto complesso: gli oggetti. 
- Numeri : 
i numeri vengono scritti senza alcun tipo di apice, inoltre esiste un solo tipo di dato per tutti i numeri che siano interi, decimali o negativi. 

- Stringhe : 
la stringa è una sequenza di caratteri delimitata da degli apici "" oppure '', non vi è nessuna regola per cui è consigliato usare "" invece di ''. 
Vi è una sola regola: il delimitatore iniziale e quello finale devono essere uguali.

- Booleani : il datatype booleano ha soltanto 2 valori possibili: true o false. 

- Null : ha un solo valore possibile: null. Rappresenta un "non valore". 

- Undefined : anche undefined prevede soltanto un valore possibile, rappresenta un valore che non esiste, non ha assegnato nessun valore possibile. Attenzione però a non confonderlo con null - hanno due significati differenti. 

- Oggetti : gli oggetti sono elementi fondamentali in Js. Esclusi i tipi di dato primitivi, tutto è oggetto in questo linguaggio: array, funzioni, espressioni etc.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* var myName = "Francesco" */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* var x = 12 + 20; */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* var x = 12 */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* myName = "Iannaccone" - - - const Fullname = "Francesco Iannaccone"
Fullname = "Andrea" nella console appare: Uncaught TypeError: Assignment to constant variable.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* console.log ((x -= 4))  */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


/* var name1 = "john"
var name2 = "John"
name1.toLowerCase
name2.toLowerCase
console.log ((name1.toLowerCase == name2.toLowerCase)) */
