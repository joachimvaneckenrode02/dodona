var hoogte = 18;
var doelHoogte = 70;
var groeiPerWeek = 8;

var weken = 0;

while (hoogte < doelHoogte) {
    hoogte = hoogte + groeiPerWeek;
    weken = weken + 1;
}

var beoordeling = "";

if (weken < 6) {
    beoordeling = "snelle groei";
} else if (weken <= 9) {
    beoordeling = "normale groei";
} else {
    beoordeling = "trage groei";
}

console.log("Na " + weken + " weken is de plant " + hoogte + " cm hoog.");
console.log("Dit is een " + beoordeling + ".");
