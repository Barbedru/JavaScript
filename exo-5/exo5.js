// you can write js here

console.log('exo-5');

var input = ('turpentine and turtles');
var vowels = ["a", "e", "i", "o", "u", "y"];
console.log("nombre de voyelles dans le tableau :", vowels.length);
var index = 0;
console.log(`le caractère à l'index ${index} est ${input.charAt(index)}`);

var ResultArray = [];

for (var i = 0; i < input.length; i++) {
    var char = input[i].toLowerCase();
    if (vowels.includes(char)) {
        ResultArray.push(char);
    }
}
console.log("la lettre courante est une voyelle:", index);
console.log("nombre de voyelles trouvées dans la phrase :", ResultArray);
console.log("nombre de voyelles trouvées :", ResultArray.length);
console.log(ResultArray.join(" "));
console.log(input.toUpperCase());