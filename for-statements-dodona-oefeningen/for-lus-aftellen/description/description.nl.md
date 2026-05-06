# Aftellen met een for-lus

## Gegeven

Een sportleerkracht telt af voor de start van een loopwedstrijd.

De gebruiker geeft één natuurlijk getal in.  
Je programma telt af van dat getal tot en met `1`.

Daarna verschijnt:

```text
Start!
```

## Gevraagd

Schrijf een JavaScript-programma dat:

1. een getal vraagt met `Number(prompt(...))`;
2. met een `for`-lus aftelt;
3. elk getal op een aparte regel toont;
4. na het aftellen `Start!` toont.

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
```

dan is de uitvoer exact:

```text
5
4
3
2
1
Start!
```

## Uitleg bij de for-lus

Een `for`-lus gebruik je als je vooraf weet hoe vaak iets moet herhalen.

Bij deze oefening:

- de teller start bij het ingegeven getal;
- de lus gaat door zolang de teller groter dan of gelijk aan `1` is;
- na elke herhaling wordt de teller `1` kleiner;
- de lus stopt wanneer de teller kleiner wordt dan `1`.

## Veelgemaakte fouten

- Aftellen tot `0` in plaats van tot `1`.
- `Start!` binnen de lus zetten.
- Een kleine letter schrijven, zoals `start!`.
- Een spatie of punt toevoegen die niet gevraagd is.
