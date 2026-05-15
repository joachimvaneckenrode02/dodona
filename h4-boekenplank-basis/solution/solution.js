var boekenPerPlank = 9;
var aantalPlanken = 6;

var totaal = 0;

for (var plank = 1; plank <= aantalPlanken; plank++) {
    totaal = totaal + boekenPerPlank;
}

console.log("In de kast staan " + totaal + " boeken.");
