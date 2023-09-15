/* Questo array viene usato per gli esercizi. Non modificarlo. */

console.log("hello world");

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let num1 = 10;
let num2 = 20;
let sum = 0;
while (num1 < num2) {
   sum += num1;
   num1++;
}
sum;
console.log("sum: ", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);
console.log("random: ", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
   name: "Isuru",
   surname: "Fernando",
   age: 23,
};

console.log("me: ", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("me age removed: ", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const skills = ["c", "python", "javascript", "sqlite"];
const addSkills = function (obj, skills) {
   obj["skills"] = skills;
};

addSkills(me, skills);

console.log("skills added: ", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("new skill");

console.log("new skill pushed: ", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log("rimosso l'ultimo elemento del skills: ", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.ceil(Math.random() * 6);
console.log("dice: ", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (n1, n2) => {
   return n1 < n2 ? n2 : n1;
};
console.log("whoIsBigger: ", whoIsBigger(10, 5));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (str) {
   return str.split(" ");
};

console.log("splitMe: ", splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (str, bool) {
   if (bool) {
      return str.substring(1);
   } else {
      return str.slice(0, -1);
   }
};

console.log("deleteOne: ", deleteOne("google", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (str) {
   containsNum = false;
   return str
      .split("")
      .filter((e) => isNaN(e) || e === " ")
      .toString()
      .trim()
      .replace(/,/g, "")
      .replace(/\s{2,}/g, " ");
};

console.log("onlyLetters: ", onlyLetters("I have 48 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (str) {
   if (str.includes("@") && str.includes(".")) {
      return true;
   } else {
      return false;
   }
};

console.log("email check: ", isThisAnEmail("kjsaèyf"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (num) {
   const obj = {
      sum: 0,
      values: [],
   };

   for (let i = 0; i < num; i++) {
      const randomNumber = dice();
      obj.sum += randomNumber;
      obj.values.push(randomNumber);
   }

   return obj;
};

console.log("rollTheDices: ", rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (data) {
   //  const today = new Date().getDate();
   //  const newDate = data.getDate();
   const today = new Date().getTime();
   const newDate = new Date(data).getTime();

   console.log(newDate, today);

   // or convert milliseconds and find the difference then re convert it to calculate days ***********************************************************************************************************
   const msDiff = newDate - today;
   const aDayInMs = 24 * 60 * 60 * 1000;

   const diff = Math.round(msDiff / aDayInMs);
   console.log("this is the difference: ", diff);

   // const diff = new moment.duration(Math.abs(today - newDate));
   return `diff: ${diff}`;
};

// const date = new Date("10/09/2023");
console.log("howManyDays: ", howManyDays("10/09/2023"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function () {
   const birthDay = new Date(2000, 1, 8);
   const today = new Date();

   console.log("bd: ", birthDay, "td: ", today);

   if (
      birthDay.getDate() === today.getDate() &&
      birthDay.getMonth() === today.getMonth() + 1 &&
      birthDay.getFullYear() === today.getFullYear()
   ) {
      return true;
   } else {
      return false;
   }
};

console.log("isTodyMyBirthDay: ", isTodayMyBirthday());

// Arrays & Oggetti

const movies = [
   {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
   },

   {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
   },
   {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
   },
   {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
   },
   {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
   },
   {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
   },
   {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
   },
   {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
   },
   {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
   },
   {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
   },
   {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
   },
   {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
   },
   {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
   },
   {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
         "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
   },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const someObj = {
   name: "Isuru",
   age: 23,
   skills: ["js", "python", "sqlite", "c"],
};

const deleteProp = function (obj, str) {
   const newObj = { ...obj };
   delete newObj[str];
   return newObj;
};

console.log("deleteProp: ", deleteProp(someObj, "age"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function (arr) {
   let latest = parseInt(arr[0].Year);
   let movie;
   for (let i = 0; i < arr.length; i++) {
      if (parseInt(arr[i].Year) > latest) {
         latest = parseInt(arr[i].Year);
         movie = arr[i];
      }
   }
   return `newest movie is ${movie.Title}, released in ${movie.Year}`;
};

console.log("newestMovie: ", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function (arr) {
   return arr.length;
};

console.log("count films: ", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function (arr) {
   const years = [];
   for (let i = 0; i < arr.length; i++) {
      years.push(arr[i].Year);
   }

   return years;
};

console.log("OnlyTheYear: ", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function (arr) {
   return arr.filter((movie) => parseInt(movie.Year) >= 2000);
};

console.log("onlyInLastMillennium: ", onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function (arr) {
   let sum = 0;
   arr.forEach((movie) => (sum += parseInt(movie.Year)));
   return sum;
};

console.log("sumAllTheYears: ", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (str) {
   // optimize needed ***********************************************************************************************
   let match = movies.map((movie) =>
      movie.Title.toLowerCase().includes(str.toLowerCase())
   );

   const matched = [];
   for (let i = 0; i < match.length; i++) {
      if (match[i] === true) {
         matched.push(movies[i]);
      }
   }

   return matched;
};

console.log("searchByTitile: ", searchByTitle("The Lord of The"));
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function (str) {
   const obj = {
      match: [],
      unmatch: [],
   };

   let match = movies.map((movie) =>
      movie.Title.toLowerCase().includes(str.toLowerCase())
   );

   for (let i = 0; i < match.length; i++) {
      if (match[i] === true) {
         obj.match.push(movies[i]);
      } else {
         obj.unmatch.push(movies[i]);
      }
   }

   return obj;
};

console.log("searchAndDivide: ", searchAndDivide("Avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// ***************************************************************************************************************
const removeIndex = function (num) {
   const newArr = [];
   for (let i = 0; i < movies.length; i++) {
      if (i !== num) {
         newArr.push(movies[i]);
      }
   }
   return newArr;
};

console.log("removeIndex: ", removeIndex(1));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const tds = document.getElementsByTagName("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const allTds = Array.from(tds);
allTds.forEach((tag) => console.log(tag.innerText));

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const allLinks = document.querySelectorAll("a");
allLinks.forEach((element) => (element.style.backgroundColor = "red"));

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const uList = document.getElementById("myList");
const listItem = document.createElement("li");
listItem.innerText = "new item";

uList.appendChild(listItem);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// not work -> //  uList.children.forEach((element) => element.remove());

const listItems = document.querySelectorAll("#myList li");

for (let i = 0; i < listItems.length; i++) {
   listItems[i].remove();
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const trs = document.getElementsByTagName("tr");
Array.from(trs).forEach((element) => element.classList.add("test"));

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const w = "hello \nworld";
console.log(w);
const halfTree = function (num) {
   let str = "";
   for (let i = 0; i < num; i++) {
      for (let j = 0; j <= i; j++) {
         str += "*";
      }
      str += `\n`;
   }

   console.log(str);
};

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
