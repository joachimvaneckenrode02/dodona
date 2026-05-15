var bedrag = 500;
var doel = 650;
var rente = 0.08;

var jaren = 0;

while (bedrag < doel) {
    bedrag = bedrag + bedrag * rente;
    jaren = jaren + 1;
}

var beoordeling = "";

if (jaren < 4) {
    beoordeling = "korte wachttijd";
} else if (jaren <= 6) {
    beoordeling = "normale wachttijd";
} else {
    beoordeling = "lange wachttijd";
}

console.log("Na " + jaren + " jaren is het bedrag " + bedrag.toFixed(2) + " euro.");
console.log("Dit is een " + beoordeling + ".");
