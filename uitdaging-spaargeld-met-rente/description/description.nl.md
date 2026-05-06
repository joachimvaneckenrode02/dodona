# Spaargeld met rente

Je zet een bedrag op een spaarrekening.
Elk jaar komt er rente bij.

De nieuwe waarde wordt zo berekend:

```text
nieuw bedrag = bedrag + bedrag * rente / 100
```

Stop zodra het bedrag minstens even groot is als het doelbedrag.

Druk eerst af hoeveel jaren nodig zijn.
Druk daarna het eindbedrag af met 2 cijfers na de komma.
Druk ten slotte af of het doel snel gehaald is.

Een doel is snel gehaald als er hoogstens 5 jaren nodig zijn.

## Invoer

Drie getallen:

1. het startbedrag
2. het doelbedrag
3. het rentepercentage

## Uitvoer

Drie regels:

- `Jaren: ...`
- `Bedrag: ... euro`
- `Snel gehaald` of `Niet snel gehaald`

## Voorbeeld

Invoer:

```text
100
120
10
```

Uitvoer:

```text
Jaren: 2
Bedrag: 121.00 euro
Snel gehaald
```

## Tip

Gebruik `.toFixed(2)` om een bedrag met 2 cijfers na de komma af te drukken.
