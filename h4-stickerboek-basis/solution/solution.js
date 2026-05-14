var stickersPerDag = 6;
var aantalDagen = 5;

var totaal = 0;

for (var dag = 1; dag <= aantalDagen; dag++) {
    totaal = totaal + stickersPerDag;
}

console.log("Na " + aantalDagen + " dagen heb je " + totaal + " stickers geplakt.");
