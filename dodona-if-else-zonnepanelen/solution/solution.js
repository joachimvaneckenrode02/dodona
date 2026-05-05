var aantalPanelen = 10;
var vermogenPerPaneel = 430;
var opbrengstFactor = 0.88;
var eigenVerbruik = 0.65;
var prijsPerKwh = 0.34;
var installatieKost = 5200;

var jaaropbrengst = aantalPanelen * vermogenPerPaneel * opbrengstFactor;
var zelfGebruikteEnergie = jaaropbrengst * eigenVerbruik;
var besparingPerJaar = zelfGebruikteEnergie * prijsPerKwh;
var terugverdientijd = installatieKost / besparingPerJaar;

var beoordeling = "";

if (terugverdientijd <= 5) {
  beoordeling = "uitstekende investering";
} else if (terugverdientijd <= 8) {
  beoordeling = "goede investering";
} else if (terugverdientijd <= 12) {
  beoordeling = "twijfelachtige investering";
} else {
  beoordeling = "zwakke investering";
}

console.log("Jaaropbrengst: " + jaaropbrengst + " kWh.");
console.log("Terugverdientijd: " + terugverdientijd.toFixed(1) + " jaar.");
console.log("Dit is een " + beoordeling + ".");
