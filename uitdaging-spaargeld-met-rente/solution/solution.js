var input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
var bedrag = Number(input[0]);
var doel = Number(input[1]);
var rente = Number(input[2]);

var maanden = 0;

while (bedrag < doel) {
  bedrag = bedrag + bedrag * rente / 100;
  maanden = maanden + 1;
}

console.log("Maanden: " + maanden);
console.log("Bedrag: " + bedrag.toFixed(2));

if (maanden == 0) {
  console.log("Doel al bereikt");
} else {
  console.log("Nog gespaard");
}
