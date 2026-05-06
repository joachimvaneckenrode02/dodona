var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var grens = Number(input[0]);

var aantal = 0;
var som = 0;

while (som < grens) {
  aantal = aantal + 1;
  som = som + aantal;
}

console.log("Aantal: " + aantal);
console.log("Som: " + som);

if (som == grens) {
  console.log("Precies gelijk");
} else {
  console.log("Niet precies gelijk");
}
