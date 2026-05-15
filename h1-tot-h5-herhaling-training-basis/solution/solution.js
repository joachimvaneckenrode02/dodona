var minutenPerDag = 25;
var aantalDagen = 6;

var totaal = 0;

for (var dag = 1; dag <= aantalDagen; dag++) {
    totaal = totaal + minutenPerDag;
}

var beoordeling = "";

if (totaal < 120) {
    beoordeling = "lichte training";
} else if (totaal <= 180) {
    beoordeling = "goede training";
} else {
    beoordeling = "zware training";
}

console.log("De leerling traint " + totaal + " minuten.");
console.log("Dit is een " + beoordeling + ".");
