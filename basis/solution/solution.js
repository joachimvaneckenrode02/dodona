var grens = 30;
var aantal = 0;

var getal = 1;

while (getal <= grens) {
    var som = 0;

    for (var deler = 1; deler < getal; deler = deler + 1) {
        if (getal % deler === 0) {
            som = som + deler;
        }
    }

    if (som === getal) {
        console.log("" + getal);
        aantal = aantal + 1;
    }

    getal = getal + 1;
}

console.log("aantal: " + aantal);
