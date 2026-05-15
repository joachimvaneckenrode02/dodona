var bloemenEersteRij = 4;
var extraPerRij = 3;
var aantalRijen = 6;

var totaal = 0;
var bloemenDezeRij = bloemenEersteRij;

for (var rij = 1; rij <= aantalRijen; rij++) {
    totaal = totaal + bloemenDezeRij;
    bloemenDezeRij = bloemenDezeRij + extraPerRij;
}

var beoordeling = "";

if (totaal < 60) {
    beoordeling = "kleine bloementuin";
} else if (totaal <= 100) {
    beoordeling = "middelgrote bloementuin";
} else {
    beoordeling = "grote bloementuin";
}

console.log("De tuinier plant " + totaal + " bloemen.");
console.log("Dit is een " + beoordeling + ".");
