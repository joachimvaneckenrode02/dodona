var afstand = 6;
var tijd = 24;

var tijdInUren = tijd / 60;
var snelheid = afstand / tijdInUren;
var beoordeling = "";

if (snelheid < 10) {
  beoordeling = "traag";
} else if (snelheid < 20) {
  beoordeling = "normaal";
} else if (snelheid < 30) {
  beoordeling = "snel";
} else {
  beoordeling = "zeer snel";
}

console.log("Je gemiddelde snelheid is " + snelheid + " km/u. Dat is " + beoordeling + ".");
