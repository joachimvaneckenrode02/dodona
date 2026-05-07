# Perfect getal met uitleg

## Gegeven

Een **deler** van een getal is een getal waardoor je exact kan delen.

Voorbeeld:

- `3` is een deler van `12`, want `12 % 3` is `0`.
- `5` is geen deler van `12`, want `12 % 5` is niet `0`.

Een **perfect getal** is een getal waarbij de som van alle delers kleiner dan het getal zelf gelijk is aan het getal.

Voorbeeld:

```text
6
```

De delers kleiner dan `6` zijn:

```text
1, 2, 3
```

De som is:

```text
1 + 2 + 3 = 6
```

Dus `6` is een perfect getal.

## Gevraagd

Schrijf een programma dat één geheel getal inleest.

Het programma moet:

1. de som van alle delers kleiner dan het getal berekenen;
2. zeggen of het getal een perfect getal is;
3. ook de gevonden som tonen.

## Invoer

Eén geheel getal.

## Uitvoer

Eerst toon je:

```text
Som van de delers: SOM
```

Daarna toon je één van deze zinnen:

```text
GETAL is een perfect getal.
```

of

```text
GETAL is geen perfect getal.
```

Vervang `SOM` en `GETAL` door de juiste waarden.

## Voorbeeld 1

### Invoer

```text
28
```

### Uitvoer

```text
Som van de delers: 28
28 is een perfect getal.
```

## Voorbeeld 2

### Invoer

```text
12
```

### Uitvoer

```text
Som van de delers: 16
12 is geen perfect getal.
```

## Code-eisen

Gebruik verplicht:

- `Number(prompt(...))`
- een `for`-lus
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

Je moet niet alleen controleren of een getal deelbaar is.

Je moet ook begrijpen welke delers meetellen.

Het getal zelf telt niet mee.

Bij `12` zijn de delers kleiner dan `12`:

```text
1, 2, 3, 4, 6
```

De som is:

```text
1 + 2 + 3 + 4 + 6 = 16
```

Daarom is `12` geen perfect getal.

## Beginnersuitleg

De teller van de `for`-lus start bij `1`.

De lus gaat door zolang de teller kleiner is dan het getal.

Bij elke teller controleer je met `%` of de teller een deler is.

Als de rest `0` is, tel je die teller op bij de som.

Na de lus vergelijk je de som met het oorspronkelijke getal.

## Veelgemaakte fouten

- Het getal zelf meetellen als deler.
- Starten bij `0`. Delen door `0` mag niet.
- De eerste uitvoerregel vergeten.
- Een spatie of punt vergeten in de uitvoer.
