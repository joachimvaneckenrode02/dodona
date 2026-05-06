# Punten tot de grens

Een speler krijgt elke ronde punten.  
Je toont na elke ronde het totaal.

De opgegeven variabelen zijn:

```javascript
var totaal = 0;
var ronde = 1;
var puntenPerRonde = 3;
var grens = 15;
```

De lus loopt zolang het totaal kleiner is dan de grens.

Na elke ronde verhoog je het totaal met `puntenPerRonde`.  
Daarna toon je het totaal.

Als het totaal kleiner is dan de grens, toon je `Nog niet genoeg.`  
Anders toon je `Grens bereikt!`

## Uitvoer

De exacte uitvoer is:

```text
Ronde 1: 3 punten
Nog niet genoeg.
Ronde 2: 6 punten
Nog niet genoeg.
Ronde 3: 9 punten
Nog niet genoeg.
Ronde 4: 12 punten
Nog niet genoeg.
Ronde 5: 15 punten
Grens bereikt!
```
