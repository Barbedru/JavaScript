// you can write js here
console.log('exo-2');

let isTesting = true;
let jourActuel;
let heureActuelle;
let jourSemaine = "Nous sommes un jour de semaine";
let jourWeekend = "Nous sommes en week-end";


if (isTesting) {
  jourActuel = Number(prompt("Jour (0 => dimanche / 1 => lundi ect)"));
  heureActuelle = Number(prompt("Heure (entre 0 et 23)"));
} else {
  const myDate = new Date();
  jourActuel = myDate.getDay();    
  heureActuelle = myDate.getHours();

  console.log("Date complète :", myDate);
}
console.log("Jour actuel :", jourActuel);
console.log("Heure actuelle :", heureActuelle);


if (jourActuel === 5 && heureActuelle >= 17) {
  console.log("Vendredi après 17h :", messageduweekend);
}

else if (jourActuel === 1 && heureActuelle < 9) {
  console.log("Lundi avant 9h :", messageduweekend);
}

else if (jourActuel === 0 || jourActuel === 6) {
  console.log(messageduweekend);
}

else {
  console.log(messagedelasemaine);
}

