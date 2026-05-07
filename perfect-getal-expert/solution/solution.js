var getal = Number(prompt("Geef een getal:"));

var som = 0;

for (var deler = 1; deler < getal; deler++) {
    if (getal % deler === 0) {
        som = som + deler;
    }
}

console.log("Som van de delers: " + som);

if (som === getal && getal > 1) {
    console.log(getal + " is een perfect getal.");
} else {
    console.log(getal + " is geen perfect getal.");
}
