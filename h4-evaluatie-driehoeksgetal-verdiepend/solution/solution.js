var aantal = 12;

var totaal = 0;

for (var getal = 1; getal <= aantal; getal++) {
    totaal = totaal + getal;
}

var beoordeling = "";

if (totaal < 50) {
    beoordeling = "klein driehoeksgetal";
} else if (totaal <= 100) {
    beoordeling = "middelgroot driehoeksgetal";
} else {
    beoordeling = "groot driehoeksgetal";
}

console.log("Het driehoeksgetal van " + aantal + " is " + totaal + ".");
console.log("Dit is een " + beoordeling + ".");
