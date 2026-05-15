var budget = 30;
var prijsBroodje = 4;

var aantalBroodjes = 0;

while (budget >= prijsBroodje) {
    budget = budget - prijsBroodje;
    aantalBroodjes = aantalBroodjes + 1;
}

console.log("De leerling koopt " + aantalBroodjes + " broodjes.");
console.log("Er blijft " + budget + " euro over.");
