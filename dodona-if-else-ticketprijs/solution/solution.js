var input = require("fs").readFileSync(0, "utf8").trim();
var leeftijd = Number(input);
var prijs = 0;

if (leeftijd < 6) {
  prijs = 0;
} else if (leeftijd <= 11) {
  prijs = 8;
} else if (leeftijd <= 17) {
  prijs = 12;
} else {
  prijs = 16;
}

console.log("Je betaalt €" + prijs + " voor je ticket.");
