var bedragInKassa = 12;
var doelBedrag = 45;
var prijsPerDrankje = 4;

var aantalDrankjes = 0;

while (bedragInKassa < doelBedrag) {
    bedragInKassa = bedragInKassa + prijsPerDrankje;
    aantalDrankjes = aantalDrankjes + 1;
}

console.log("Er moeten nog " + aantalDrankjes + " drankjes verkocht worden.");
