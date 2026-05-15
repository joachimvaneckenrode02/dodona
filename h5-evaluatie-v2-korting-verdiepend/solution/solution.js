var prijs = 275;
var doelPrijs = 180;
var kortingPerBon = 22;

var aantalBonnen = 0;

while (prijs > doelPrijs) {
    prijs = prijs - kortingPerBon;
    aantalBonnen = aantalBonnen + 1;
}

var beoordeling = "";

if (aantalBonnen < 4) {
    beoordeling = "weinig bonnen";
} else if (aantalBonnen <= 6) {
    beoordeling = "normaal aantal bonnen";
} else {
    beoordeling = "veel bonnen";
}

console.log("Na " + aantalBonnen + " bonnen is de prijs " + prijs + " euro.");
console.log("Dit is een " + beoordeling + ".");
