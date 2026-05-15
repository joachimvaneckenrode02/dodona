var aantalLeerlingen = 0;
var doel = 38;
var leerlingenPerHalte = 9;

var haltes = 0;

while (aantalLeerlingen < doel) {
    aantalLeerlingen = aantalLeerlingen + leerlingenPerHalte;
    haltes = haltes + 1;
}

console.log("Na " + haltes + " haltes zitten er " + aantalLeerlingen + " leerlingen in de bus.");
