var bedrag = Number(prompt("Geef het spaarbedrag per week:"));
var weken = Number(prompt("Geef het aantal weken:"));

var totaal = 0;

for (var week = 1; week <= weken; week++) {
    totaal = totaal + bedrag;
    console.log("Na week " + week + ": " + totaal + " euro");
}
