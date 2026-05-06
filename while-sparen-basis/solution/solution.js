var doel = Number(prompt("Wat is je spaardoel?"));
var weekbedrag = Number(prompt("Hoeveel spaar je per week?"));

var gespaard = 0;
var weken = 0;

while (gespaard < doel) {
    weken = weken + 1;
    gespaard = gespaard + weekbedrag;
}

console.log("Na " + weken + " weken heb je " + gespaard + " euro gespaard.");
