var afstand = 7.5;
var minuten = 30;
var uren = minuten / 60;
var snelheid = afstand / uren;
var beoordeling = "";

if (snelheid < 12) {
  beoordeling = "traag";
} else if (snelheid < 18) {
  beoordeling = "normaal";
} else if (snelheid < 25) {
  beoordeling = "snel";
} else {
  beoordeling = "zeer snel";
}

console.log("Je gemiddelde snelheid is " + snelheid + " km/u. Dat is " + beoordeling + ".");
