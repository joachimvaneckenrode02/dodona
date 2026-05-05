# Ticketprijs met `if`, `else if` en `else`

## Gegeven

Een pretpark werkt met verschillende ticketprijzen volgens leeftijd.

De prijzen zijn:

- jonger dan 6 jaar: **0 euro**
- van 6 tot en met 11 jaar: **8 euro**
- van 12 tot en met 17 jaar: **12 euro**
- 18 jaar of ouder: **16 euro**

Je krijgt de leeftijd als invoer.

## Gevraagd

Schrijf een JavaScript-programma dat:

- de leeftijd inleest;
- een variabele `prijs` maakt;
- met `if`, `else if` en `else` bepaalt welke prijs de bezoeker moet betalen;
- het resultaat toont met `console.log()`.

Gebruik gewone opeenvolgende code.
Gebruik geen functies.

## Invoer

Eén getal: de leeftijd van de bezoeker.

## Uitvoer

Print exact deze zin:

```text
Je betaalt €PRIJS voor je ticket.
```

Vervang `PRIJS` door de juiste prijs.

## Voorbeeld

### Invoer

```text
13
```

### Uitvoer

```text
Je betaalt €12 voor je ticket.
```

## Startcode

```javascript
var input = require("fs").readFileSync(0, "utf8").trim();
var leeftijd = Number(input);
var prijs = 0;

// Schrijf hieronder je code

console.log("Je betaalt €" + prijs + " voor je ticket.");
```

## Tips

- Gebruik `var` om variabelen te maken.
- Gebruik `if` voor de eerste controle.
- Gebruik `else if` voor de volgende controles.
- Gebruik `else` voor alles wat overblijft.
- Let goed op de grenzen: 6, 12 en 18.
- Gebruik `console.log()` om het resultaat te tonen.
- Let op met hoofdletters, spaties en het punt op het einde.

Maak gebruik van de Papyros-omgeving om jouw code uit te testen en te debuggen. Dien daarna jouw code in via de Dodona-omgeving.
