# Ruimtemissie

Je schrijft een programma dat een korte ruimtemissie voorbereidt.

## Gegeven variabelen

Gebruik deze variabelen in je code:

```javascript
var naam = "Nova";
var zuurstof = 82;
var brandstof = 55;
var batterijen = 3;
var modules = 4;
var noodsignaal = false;
```

## Verwerking

Maak eerst een bericht met concatenatie.

Controleer daarna of de missie kan starten.

De missie mag starten als:

- er minstens 60 zuurstof is **en** minstens 50 brandstof
- **of** er minstens 2 batterijen zijn **en** er geen noodsignaal is

Gebruik hiervoor `||` en `&&`.

Gebruik daarna `if`, `else if` en `else` om de voorraad zuurstof te beoordelen:

- minder dan 40: `zuurstof kritiek`
- van 40 tot en met 80: `zuurstof voldoende`
- meer dan 80: `zuurstof uitstekend`

Gebruik daarna een `for`-lus om alle modules te controleren.

Gebruik ten slotte een `while`-lus om de lancering af te tellen van 5 naar 1.

Tijdens het aftellen toon je met een `if` in de `while`-lus een extra controle bij 3.

## Exacte uitvoer

```text
Astronaut Nova meldt zich aan.
Missie mag starten.
zuurstof uitstekend
Module 1 gecontroleerd.
Module 2 gecontroleerd.
Module 3 gecontroleerd.
Module 4 gecontroleerd.
Lancering over 5
Lancering over 4
Extra systeemcontrole
Lancering over 3
Lancering over 2
Lancering over 1
Lancering!
```
