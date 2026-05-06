var totaal = 0;
var ronde = 1;
var puntenPerRonde = 3;
var grens = 15;

while (totaal < grens) {
    totaal = totaal + puntenPerRonde;

    console.log("Ronde " + ronde + ": " + totaal + " punten");

    if (totaal < grens) {
        console.log("Nog niet genoeg.");
    } else {
        console.log("Grens bereikt!");
    }

    ronde = ronde + 1;
}
