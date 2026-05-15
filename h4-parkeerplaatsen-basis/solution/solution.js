var plaatsenPerRij = 14;
var aantalRijen = 8;

var totaal = 0;

for (var rij = 1; rij <= aantalRijen; rij++) {
    totaal = totaal + plaatsenPerRij;
}

console.log("De parking heeft " + totaal + " parkeerplaatsen.");
