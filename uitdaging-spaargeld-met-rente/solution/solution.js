var bedrag = Number(prompt());
var doel = Number(prompt());
var rente = Number(prompt());

var jaren = 0;

while (bedrag < doel) {
  bedrag = bedrag + bedrag * rente / 100;
  jaren = jaren + 1;
}

console.log("Jaren: " + jaren);
console.log("Bedrag: " + bedrag.toFixed(2) + " euro");

if (jaren <= 5) {
  console.log("Snel gehaald");
} else {
  console.log("Niet snel gehaald");
}
