var aantalRijen = 12;
var stoelenPerRij = 8;

var totaal = 0;

for (var rij = 1; rij <= aantalRijen; rij++) {
    totaal = totaal + stoelenPerRij;
}

var soortZaal = "";

if (totaal < 80) {
    soortZaal = "kleine zaal";
} else if (totaal <= 120) {
    soortZaal = "middelgrote zaal";
} else {
    soortZaal = "grote zaal";
}

console.log("De zaal heeft " + totaal + " zitplaatsen.");
console.log("Dit is een " + soortZaal + ".");
