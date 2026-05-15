var tafel = 4;
var aantalOefeningen = 8;

var totaal = 0;

for (var teller = 1; teller <= aantalOefeningen; teller++) {
    var uitkomst = tafel * teller;
    totaal = totaal + uitkomst;
}

var beoordeling = "";

if (totaal < 100) {
    beoordeling = "lage score";
} else if (totaal <= 180) {
    beoordeling = "goede score";
} else {
    beoordeling = "hoge score";
}

console.log("De leerling behaalt " + totaal + " punten.");
console.log("Dit is een " + beoordeling + ".");
