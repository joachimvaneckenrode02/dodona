# Vriendengetallen met controlesommen

## Gegeven

Twee getallen zijn **vriendengetallen** als:

- de som van de delers van het eerste getal gelijk is aan het tweede getal;
- de som van de delers van het tweede getal gelijk is aan het eerste getal;
- de twee getallen niet gelijk zijn.

Het getal zelf telt niet mee als deler.

Een bekend voorbeeld is:

```text
220 en 284
```

De som van de delers van `220` is `284`.

De som van de delers van `284` is `220`.

Dus `220` en `284` zijn vriendengetallen.

## Gevraagd

Schrijf een programma dat twee gehele getallen inleest.

Het programma moet:

1. de som van de delers van het eerste getal berekenen;
2. de som van de delers van het tweede getal berekenen;
3. beide sommen tonen;
4. zeggen of de getallen vriendengetallen zijn.

## Invoer

Twee gehele getallen.

## Uitvoer

Eerst toon je:

```text
Som bij GETAL1: SOM1
Som bij GETAL2: SOM2
```

Daarna toon je één van deze zinnen:

```text
GETAL1 en GETAL2 zijn vriendengetallen.
```

of

```text
GETAL1 en GETAL2 zijn geen vriendengetallen.
```

## Voorbeeld 1

### Invoer

```text
220
284
```

### Uitvoer

```text
Som bij 220: 284
Som bij 284: 220
220 en 284 zijn vriendengetallen.
```

## Voorbeeld 2

### Invoer

```text
6
6
```

### Uitvoer

```text
Som bij 6: 6
Som bij 6: 6
6 en 6 zijn geen vriendengetallen.
```

## Code-eisen

Gebruik verplicht:

- `Number(prompt(...))`
- twee `for`-lussen
- `if`
- `else`
- `console.log(...)`

Gebruik niet:

- `let`
- `const`
- functies
- arrays
- objecten
- HTML
- DOM
- externe libraries

## Wiskundig inzicht

Je moet in twee richtingen controleren.

Het is niet genoeg dat de som van de delers van het eerste getal gelijk is aan het tweede getal.

Ook de som van de delers van het tweede getal moet gelijk zijn aan het eerste getal.

Bovendien mogen de getallen niet gelijk zijn.

Daarom zijn `6` en `6` geen vriendengetallen, ook al is `6` een perfect getal.

## Beginnersuitleg

Je gebruikt eerst een `for`-lus voor het eerste getal.

Daarna gebruik je een tweede `for`-lus voor het tweede getal.

Elke lus start bij `1`.

Elke lus stopt net voor het getal zelf.

Zo telt het getal zelf niet mee als deler.

Na de twee lussen controleer je de drie voorwaarden met `if`.

## Veelgemaakte fouten

- Maar één van de twee sommen controleren.
- Vergeten dat gelijke getallen geen vriendengetallen zijn.
- Het getal zelf meetellen als deler.
- De twee regels met sommen niet exact juist schrijven.
