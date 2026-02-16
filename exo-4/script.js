// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//exo 1 : enlever le dernier élément du tableau
secretMessage.pop();

//Ajout des mots 'to' et 'program' à la fin du tableau
secretMessage.push("to","program");

//Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
secretMessage[6] = "right";

//supprimer le premier élément du tableau.
secretMessage.shift();

//ajouter la chaine "Programming" en début de tableau.
secretMessage.unshift("programming");

//remplace la série de cinq mots : 'get', 'right', 'the', 'first', 'time' par un seul mot : 'know'.
secretMessage.splice(5,5,"know");

//méthode `.join` pour afficher le message secret dans la console.
console.log(secretMessage.join(""));