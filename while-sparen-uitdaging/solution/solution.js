var doel = Number(prompt("Wat is je spaardoel?"));
var gespaard = Number(prompt("Hoeveel heb je al gespaard?"));
var weekbedrag = Number(prompt("Hoeveel spaar je per week?"));

var weken = 0;

while (gespaard < doel) {
    weken = weken + 1;
    gespaard = gespaard + weekbedrag;
}

console.log("Na " + weken + " extra weken heb je " + gespaard + " euro gespaard.");
