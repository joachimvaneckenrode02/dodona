var grens = Number(prompt());

var som = 0;
var aantal = 0;

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
