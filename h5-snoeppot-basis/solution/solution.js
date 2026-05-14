var aantalSnoepjes = 24;
var snoepjesPerDag = 5;

var dagen = 0;

while (aantalSnoepjes > 0) {
    aantalSnoepjes = aantalSnoepjes - snoepjesPerDag;
    dagen = dagen + 1;
}

console.log("Na " + dagen + " dagen is de snoeppot leeg.");
