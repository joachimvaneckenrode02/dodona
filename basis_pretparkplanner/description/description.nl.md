# Pretparkplanner

Je maakt een klein programma voor een dag in een pretpark.

## Gegeven variabelen

Gebruik deze variabelen in je code:

```javascript
var naam = "Mila";
var leeftijd = 13;
var lengte = 142;
var budget = 18;
var aantalAttracties = 5;
```

## Verwerking

Maak eerst een begroeting met concatenatie.

Controleer daarna of de bezoeker in de achtbaan mag.

De bezoeker mag in de achtbaan als:

- de leeftijd minstens 12 is **en** de lengte minstens 140 is
- **of** de leeftijd minstens 16 is

Gebruik hiervoor `||` en `&&`.

Gebruik daarna `if`, `else if` en `else` om het budget te beoordelen:

- minder dan 10 euro: `laag budget`
- van 10 tot en met 20 euro: `goed budget`
- meer dan 20 euro: `ruim budget`

Gebruik daarna een `for`-lus om voor elke attractie een regel te tonen.

Gebruik ten slotte een `while`-lus om af te tellen van 3 naar 1.

## Exacte uitvoer

```text
Welkom Mila!
Je mag in de achtbaan.
goed budget
Attractie 1 gepland.
Attractie 2 gepland.
Attractie 3 gepland.
Attractie 4 gepland.
Attractie 5 gepland.
Start over 3
Start over 2
Start over 1
Veel plezier!
```
