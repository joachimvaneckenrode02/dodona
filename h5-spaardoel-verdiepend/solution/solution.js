var startBedrag = 35;
var spaarbedragPerWeek = 18;
var doel = 120;

var totaal = startBedrag;
var weken = 0;

while (totaal < doel) {
    totaal = totaal + spaarbedragPerWeek;
    weken = weken + 1;
}

var beoordeling = "";

if (weken < 5) {
    beoordeling = "snel gehaald";
} else if (weken <= 8) {
    beoordeling = "haalbaar";
} else {
    beoordeling = "lang sparen";
}

console.log("Na " + weken + " weken heb je " + totaal + " euro.");
console.log("Dit spaardoel is " + beoordeling + ".");
