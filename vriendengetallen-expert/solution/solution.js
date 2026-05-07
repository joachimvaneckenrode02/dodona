var getal1 = Number(prompt("Geef het eerste getal:"));
var getal2 = Number(prompt("Geef het tweede getal:"));

var som1 = 0;
var som2 = 0;

for (var deler1 = 1; deler1 < getal1; deler1++) {
    if (getal1 % deler1 === 0) {
        som1 = som1 + deler1;
    }
}

for (var deler2 = 1; deler2 < getal2; deler2++) {
    if (getal2 % deler2 === 0) {
        som2 = som2 + deler2;
    }
}

console.log("Som bij " + getal1 + ": " + som1);
console.log("Som bij " + getal2 + ": " + som2);

if (som1 === getal2 && som2 === getal1 && getal1 !== getal2) {
    console.log(getal1 + " en " + getal2 + " zijn vriendengetallen.");
} else {
    console.log(getal1 + " en " + getal2 + " zijn geen vriendengetallen.");
}
