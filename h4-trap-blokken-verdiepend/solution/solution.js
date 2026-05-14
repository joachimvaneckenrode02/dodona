var aantalRijen = 5;

var aantalBlokken = 0;

for (var rij = 1; rij <= aantalRijen; rij++) {
    aantalBlokken = aantalBlokken + rij;
}

var beoordeling = "";

if (aantalBlokken < 15) {
    beoordeling = "kleine trap";
} else if (aantalBlokken <= 50) {
    beoordeling = "middelgrote trap";
} else {
    beoordeling = "grote trap";
}

console.log("Voor " + aantalRijen + " rijen heb je " + aantalBlokken + " blokken nodig.");
console.log("Dit is een " + beoordeling + ".");
