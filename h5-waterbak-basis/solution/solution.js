var inhoud = 0;
var doel = 30;
var literPerEmmer = 7;

var aantalEmmers = 0;

while (inhoud < doel) {
    inhoud = inhoud + literPerEmmer;
    aantalEmmers = aantalEmmers + 1;
}

console.log("Na " + aantalEmmers + " emmers zit er " + inhoud + " liter in de waterbak.");
