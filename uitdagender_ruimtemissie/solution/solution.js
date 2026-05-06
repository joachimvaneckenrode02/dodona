var naam = "Nova";
var zuurstof = 82;
var brandstof = 55;
var batterijen = 3;
var modules = 4;
var noodsignaal = false;

console.log("Astronaut " + naam + " meldt zich aan.");

if ((zuurstof >= 60 && brandstof >= 50) || (batterijen >= 2 && noodsignaal === false)) {
    console.log("Missie mag starten.");
} else {
    console.log("Missie mag niet starten.");
}

if (zuurstof < 40) {
    console.log("zuurstof kritiek");
} else if (zuurstof <= 80) {
    console.log("zuurstof voldoende");
} else {
    console.log("zuurstof uitstekend");
}

for (var module = 1; module <= modules; module++) {
    console.log("Module " + module + " gecontroleerd.");
}

var aftellen = 5;
while (aftellen >= 1) {
    if (aftellen === 3) {
        console.log("Extra systeemcontrole");
    }

    console.log("Lancering over " + aftellen);
    aftellen = aftellen - 1;
}

console.log("Lancering!");
