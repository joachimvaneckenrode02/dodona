var naam = "Mila";
var leeftijd = 13;
var lengte = 142;
var budget = 18;
var aantalAttracties = 5;

console.log("Welkom " + naam + "!");

if ((leeftijd >= 12 && lengte >= 140) || leeftijd >= 16) {
    console.log("Je mag in de achtbaan.");
} else {
    console.log("Je mag niet in de achtbaan.");
}

if (budget < 10) {
    console.log("laag budget");
} else if (budget <= 20) {
    console.log("goed budget");
} else {
    console.log("ruim budget");
}

for (var i = 1; i <= aantalAttracties; i++) {
    console.log("Attractie " + i + " gepland.");
}

var teller = 3;
while (teller >= 1) {
    console.log("Start over " + teller);
    teller = teller - 1;
}

console.log("Veel plezier!");
