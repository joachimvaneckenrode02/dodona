var startMinuten = 10;
var extraPerDag = 3;
var aantalDagen = 6;

var totaal = 0;
var minutenVandaag = startMinuten;

for (var dag = 1; dag <= aantalDagen; dag++) {
    totaal = totaal + minutenVandaag;
    minutenVandaag = minutenVandaag + extraPerDag;
}

var beoordeling = "";

if (totaal < 100) {
    beoordeling = "lichte training";
} else if (totaal <= 150) {
    beoordeling = "stevige training";
} else {
    beoordeling = "zware training";
}

console.log("In " + aantalDagen + " dagen loopt de leerling " + totaal + " minuten.");
console.log("Dit is een " + beoordeling + ".");
