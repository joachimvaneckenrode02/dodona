# Temperatuur beoordelen

In deze oefening leer je werken met:

```javascript
if
else if
else
```

Met deze drie onderdelen kan je een programma verschillende beslissingen laten nemen.

## Opdracht

Schrijf een functie met de naam `beoordeelTemperatuur`.

De functie krijgt één getal binnen: `temperatuur`.

De functie moet een tekst teruggeven volgens deze regels:

| Temperatuur | Resultaat |
|---|---|
| Lager dan 0 | `"Het vriest"` |
| Van 0 tot en met 15 | `"Het is koud"` |
| Van 16 tot en met 25 | `"Het is aangenaam"` |
| Hoger dan 25 | `"Het is warm"` |

## Functienaam

Je functie moet exact deze naam hebben:

```javascript
beoordeelTemperatuur
```

Let op de hoofdletters. JavaScript is hoofdlettergevoelig.

Dit is dus juist:

```javascript
beoordeelTemperatuur
```

Dit is niet hetzelfde:

```javascript
beoordeeltemperatuur
```

## Verwachte structuur

Je schrijft een functie zoals deze:

```javascript
function beoordeelTemperatuur(temperatuur) {
  // schrijf hier je code
}
```

Binnen de functie gebruik je:

```javascript
if (...) {
  ...
} else if (...) {
  ...
} else {
  ...
}
```

## Belangrijk

Gebruik `return`.

Gebruik dus niet `console.log`.

Waarom?

- `return` geeft een waarde terug aan Dodona.
- `console.log` toont alleen iets op het scherm.
- Dodona test hier de teruggegeven waarde.

## Voorbeelden

```javascript
beoordeelTemperatuur(-3)
```

moet teruggeven:

```javascript
"Het vriest"
```

```javascript
beoordeelTemperatuur(10)
```

moet teruggeven:

```javascript
"Het is koud"
```

```javascript
beoordeelTemperatuur(20)
```

moet teruggeven:

```javascript
"Het is aangenaam"
```

```javascript
beoordeelTemperatuur(30)
```

moet teruggeven:

```javascript
"Het is warm"
```

## Tip

Denk goed na over de volgorde.

Je kan bijvoorbeeld starten met:

```javascript
if (temperatuur < 0) {
  return "Het vriest";
}
```

Daarna controleer je de volgende mogelijkheid met `else if`.

## Mogelijke aanpak

1. Maak de functie `beoordeelTemperatuur`.
2. Controleer eerst of de temperatuur lager is dan 0.
3. Controleer daarna of de temperatuur maximum 15 is.
4. Controleer daarna of de temperatuur maximum 25 is.
5. In alle andere gevallen is het warm.

## Let op

De tekst moet exact juist zijn.

Dus:

```javascript
"Het is koud"
```

is juist.

Maar dit is fout:

```javascript
"het is koud"
```

Ook dit is fout:

```javascript
"Het is koud."
```

Het punt op het einde maakt de tekst anders.
