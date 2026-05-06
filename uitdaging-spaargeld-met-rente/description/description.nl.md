# Spaargeld met rente

Je spaart voor een aankoop.

Je voert drie getallen in:

1. het startbedrag;
2. het doelbedrag;
3. de rente per maand in procent.

Elke maand groeit je geld met deze formule:

```text
nieuw bedrag = bedrag + bedrag * rente / 100
```

Gebruik een `while`-lus om te berekenen na hoeveel maanden je het doelbedrag bereikt.

Toon daarna het aantal maanden en het eindbedrag.

Als het startbedrag al minstens even groot is als het doelbedrag, toon je ook `Doel al bereikt`.

## Invoer

Drie getallen, elk op een aparte regel.

## Uitvoer

Als het doel al bereikt is:

```text
Maanden: 0
Bedrag: ...
Doel al bereikt
```

Anders:

```text
Maanden: ...
Bedrag: ...
Nog gespaard
```

Rond het bedrag af op 2 cijfers na de komma.
