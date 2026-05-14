var bedragPerWeek = 5;
var aantalWeken = 4;

var totaal = 0;

for (var week = 1; week <= aantalWeken; week++) {
    totaal = totaal + bedragPerWeek;
}

console.log("Na " + aantalWeken + " weken heb je " + totaal + " euro gespaard.");
