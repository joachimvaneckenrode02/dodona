var stappenPerDag = 6500;
var aantalDagen = 7;

var totaal = 0;

for (var dag = 1; dag <= aantalDagen; dag++) {
    totaal = totaal + stappenPerDag;
}

console.log("Na " + aantalDagen + " dagen heeft de leerling " + totaal + " stappen gezet.");
