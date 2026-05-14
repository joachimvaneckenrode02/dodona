var budget = 50;
var kostPerLeerling = 6;

var aantalLeerlingen = 0;

while (budget >= kostPerLeerling) {
    budget = budget - kostPerLeerling;
    aantalLeerlingen = aantalLeerlingen + 1;
}

var soortGroep = "";

if (aantalLeerlingen < 6) {
    soortGroep = "kleine groep";
} else if (aantalLeerlingen <= 10) {
    soortGroep = "normale groep";
} else {
    soortGroep = "grote groep";
}

console.log("Er kunnen " + aantalLeerlingen + " leerlingen deelnemen.");
console.log("Er blijft " + budget + " euro over. Dit is een " + soortGroep + ".");
