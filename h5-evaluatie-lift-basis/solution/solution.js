var huidigeVerdieping = 0;
var doelVerdieping = 17;
var stap = 4;

var aantalBewegingen = 0;

while (huidigeVerdieping < doelVerdieping) {
    huidigeVerdieping = huidigeVerdieping + stap;
    aantalBewegingen = aantalBewegingen + 1;
}

console.log("Na " + aantalBewegingen + " bewegingen staat de lift op verdieping " + huidigeVerdieping + ".");
