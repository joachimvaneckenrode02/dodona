var eigenScorePerWedstrijd = 18;
var tegenScorePerWedstrijd = 13;
var aantalWedstrijden = 6;

var totaalVerschil = 0;

for (var wedstrijd = 1; wedstrijd <= aantalWedstrijden; wedstrijd++) {
    var verschil = eigenScorePerWedstrijd - tegenScorePerWedstrijd;
    totaalVerschil = totaalVerschil + verschil;
}

var beoordeling = "";

if (totaalVerschil < 20) {
    beoordeling = "klein verschil";
} else if (totaalVerschil <= 40) {
    beoordeling = "duidelijk verschil";
} else {
    beoordeling = "groot verschil";
}

console.log("Na " + aantalWedstrijden + " wedstrijden is het totale scoreverschil " + totaalVerschil + " punten.");
console.log("Dit is een " + beoordeling + ".");
