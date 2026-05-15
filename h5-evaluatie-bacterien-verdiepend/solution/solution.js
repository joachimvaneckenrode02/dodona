var aantalBacterien = 6;
var grens = 200;

var rondes = 0;

while (aantalBacterien < grens) {
    aantalBacterien = aantalBacterien * 2;
    rondes = rondes + 1;
}

var beoordeling = "";

if (rondes < 5) {
    beoordeling = "snelle groei";
} else if (rondes <= 7) {
    beoordeling = "normale groei";
} else {
    beoordeling = "trage groei";
}

console.log("Na " + rondes + " rondes zijn er " + aantalBacterien + " bacteriën.");
console.log("Dit is een " + beoordeling + ".");
