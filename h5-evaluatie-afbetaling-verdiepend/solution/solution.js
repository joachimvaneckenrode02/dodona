var schuld = 340;
var betalingPerMaand = 55;

var maanden = 0;

while (schuld > 0) {
    schuld = schuld - betalingPerMaand;
    maanden = maanden + 1;
}

var beoordeling = "";

if (maanden < 6) {
    beoordeling = "korte afbetaling";
} else if (maanden <= 10) {
    beoordeling = "normale afbetaling";
} else {
    beoordeling = "lange afbetaling";
}

console.log("Na " + maanden + " maanden is de schuld afbetaald.");
console.log("De laatste stand is " + schuld + " euro. Dit is een " + beoordeling + ".");
