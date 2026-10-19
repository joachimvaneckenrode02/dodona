lengte = int(input("Lengte van het terras (cm): "))
breedte = int(input("Breedte van het terras (cm): "))
zijde = int(input("Zijde van 1 tegel (cm): "))
per_doos = int(input("Aantal tegels per doos: "))
prijs_doos = float(input("Prijs van 1 doos: "))

# naar boven afronden zonder math: (a + b - 1) // b
tegels_lengte = (lengte + zijde - 1) // zijde
tegels_breedte = (breedte + zijde - 1) // zijde
tegels = tegels_lengte * tegels_breedte

gezaagd = tegels - (lengte // zijde) * (breedte // zijde)

dozen = (tegels + per_doos - 1) // per_doos
reserve = dozen * per_doos - tegels
prijs = round(dozen * prijs_doos, 2)

print("Aantal tegels:", tegels)
print("Waarvan gezaagd:", gezaagd)
print("Aantal dozen:", dozen)
print("Reservetegels:", reserve)
print("Totale prijs:", prijs, "euro")
