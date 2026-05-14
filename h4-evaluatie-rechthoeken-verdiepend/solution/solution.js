var startBreedte = 2;
var hoogte = 4;
var aantalRechthoeken = 5;

var totaal = 0;
var breedte = startBreedte;

for (var rechthoek = 1; rechthoek <= aantalRechthoeken; rechthoek++) {
    var oppervlakte = breedte * hoogte;
    totaal = totaal + oppervlakte;
    breedte = breedte + 1;
}

var beoordeling = "";

if (totaal < 70) {
    beoordeling = "klein bouwwerk";
} else if (totaal <= 120) {
    beoordeling = "middelgroot bouwwerk";
} else {
    beoordeling = "groot bouwwerk";
}

console.log("Voor " + aantalRechthoeken + " rechthoeken heb je " + totaal + " blokjes nodig.");
console.log("Dit is een " + beoordeling + ".");
