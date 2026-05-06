# Sparen met startbedrag

## Gegeven

Je hebt al wat geld in je spaarpot.

Elke week spaar je hetzelfde bedrag bij.

Je wil weten na hoeveel extra weken je minstens je spaardoel bereikt.

Je leest drie getallen in:

1. het spaardoel in euro
2. het startbedrag in euro
3. het bedrag dat je elke week spaart in euro

## Gevraagd

Schrijf een programma dat berekent na hoeveel extra weken je genoeg geld hebt.

Gebruik een `while`-lus.

## Verwachte uitvoer

Print exact deze zin:

```text
Na ... extra weken heb je ... euro gespaard.
```

Vervang de puntjes door het aantal extra weken en het gespaarde bedrag.

## Voorbeeld

Invoer:

```text
100
40
15
```

Uitvoer:

```text
Na 4 extra weken heb je 100 euro gespaard.
```

## Testwaarden

De oefening wordt getest met waarden waarbij je nog moet sparen.
Er is ook een test waarbij je startbedrag al genoeg is.

## Beginnersuitleg

Een `while`-lus herhaalt zolang een voorwaarde waar is.

Hier start het gespaarde bedrag op het startbedrag.

Zolang het gespaarde bedrag kleiner is dan het doel, komt er één week bij.
Daarna komt het weekbedrag bij het gespaarde bedrag.

Als het startbedrag al genoeg is, wordt de lus nul keer uitgevoerd.

## Veelgemaakte fouten

- Altijd minstens één week tellen, ook als het startbedrag al genoeg is.
- De teller op `1` laten starten in plaats van op `0`.
- De volgorde in de lus verwarren.
- `Number(prompt(...))` vergeten.
