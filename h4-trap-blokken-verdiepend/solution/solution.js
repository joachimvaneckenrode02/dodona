var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var index = 0;
function prompt() {
    var waarde = input[index];
    index = index + 1;
    return waarde;
}

var aantalRijen = Number(prompt());

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
