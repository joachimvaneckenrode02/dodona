# Spaarplan met een for-lus

## Gegeven

Een leerling spaart elke week hetzelfde bedrag.

De gebruiker voert twee getallen in:

1. het bedrag dat elke week gespaard wordt;
2. het aantal weken.

Je programma toont na elke week hoeveel euro er in totaal gespaard is.

## Gevraagd

Schrijf een JavaScript-programma dat:

1. het spaarbedrag per week vraagt;
2. het aantal weken vraagt;
3. met een `for`-lus het totaal berekent;
4. na elke week het totaal toont.

## Code-eisen

Je moet gebruiken:

- `var`
- `Number(prompt(...))`
- `console.log(...)`
- een `for`-lus

Je mag niet gebruiken:

- `let`
- `const`
- functies
- arrays
- objecten

## Verwachte uitvoer

Als de invoer is:

```text
5
4
```

dan is de uitvoer exact:

```text
Na week 1: 5 euro
Na week 2: 10 euro
Na week 3: 15 euro
Na week 4: 20 euro
```

## Uitleg bij de for-lus

Een `for`-lus past hier goed, want het aantal weken is vooraf gekend.

Bijvoorbeeld bij `4` weken:

- de teller start op `1`;
- de lus gaat door zolang de teller kleiner dan of gelijk aan `4` is;
- na elke herhaling wordt de teller `1` groter;
- de lus stopt na week `4`.

In elke herhaling wordt het weekbedrag bij het totaal opgeteld.

## Veelgemaakte fouten

- De teller laten starten op `0` en dan `week 0` tonen.
- Het totaal telkens opnieuw op `0` zetten binnen de lus.
- `euro` vergeten in de uitvoer.
- Een andere tekst gebruiken dan gevraagd.
