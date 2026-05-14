var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var index = 0;
function prompt() {
    var waarde = input[index];
    index = index + 1;
    return waarde;
}

var bedragPerWeek = Number(prompt());
var aantalWeken = Number(prompt());

var totaal = 0;

for (var week = 1; week <= aantalWeken; week++) {
    totaal = totaal + bedragPerWeek;
}

console.log("Na " + aantalWeken + " weken heb je " + totaal + " euro gespaard.");
