// you can write js here
console.log('exo-2');

const myDate = new Date();
let jourSemaine = ("Nous sommes un jour de la semaine");
let jourWeekend = ("Nous somme un jour du weekend");

let jourActuel = myDate.getDay();
let heureActuel = myDate.getHours();

let isTesting = true 
let demandeJour = prompt("Quel jour");
let demandeHeure = prompt("Quel heure");
 


console.log(jourActuel);

 if (jourActuel < 6 ){
    console.log(jourSemaine);
 }else{
    console.log(jourWeekend);
 }


 if(heureActuel > 17 && jourActuel == 5){
    console.log(jourWeekend);
 }else{
    console.log(jourSemaine);
 }



 if (jourActuel == 0 && heureActuel < 9){
    console.log(jourWeekend);
 }else{
    console.log(jourSemaine);
 }

