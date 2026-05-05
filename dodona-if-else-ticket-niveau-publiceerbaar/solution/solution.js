var leeftijd = 14;
var ticket = "";

if (leeftijd < 6) {
  ticket = "gratis toegang";
} else if (leeftijd <= 11) {
  ticket = "kinderticket";
} else if (leeftijd <= 17) {
  ticket = "jongerenticket";
} else {
  ticket = "volwassenenticket";
}

console.log("Je krijgt een " + ticket + ".");
