# Spaarpot vullen

## Gegeven

Je spaart elke week hetzelfde bedrag.

Je wil weten na hoeveel weken je minstens je spaardoel bereikt.

Je leest twee getallen in:

1. het spaardoel in euro
2. het bedrag dat je elke week spaart in euro

## Gevraagd

Schrijf een programma dat berekent na hoeveel weken je genoeg geld hebt.

Gebruik een `while`-lus.

## Verwachte uitvoer

Print exact deze zin:

```text
Na ... weken heb je ... euro gespaard.
```

Vervang de puntjes door het aantal weken en het gespaarde bedrag.

## Voorbeeld

Invoer:

```text
50
10
```

Uitvoer:

```text
Na 5 weken heb je 50 euro gespaard.
```

## Testwaarden

De oefening wordt getest met verschillende spaardoelen en weekbedragen.

## Beginnersuitleg

Een `while`-lus herhaalt zolang een voorwaarde waar is.

Hier start het gespaarde bedrag op `0`.

Zolang het gespaarde bedrag kleiner is dan het doel, komt er één week bij.
Daarna komt het weekbedrag bij het gespaarde bedrag.

De lus stopt zodra je genoeg geld hebt.

## Veelgemaakte fouten

- Vergeten om het aantal weken te verhogen.
- Vergeten om het weekbedrag bij het gespaarde bedrag te tellen.
- `prompt()` gebruiken zonder `Number()`, waardoor de invoer tekst blijft.
- Stoppen wanneer het bedrag gelijk is aan het doel, maar niet wanneer het erover gaat.
