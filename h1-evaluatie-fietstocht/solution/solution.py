afstand = float(input("Afstand in km: "))
uren = int(input("Aantal uren: "))
minuten = int(input("Aantal minuten: "))

totale_minuten = uren * 60 + minuten
snelheid = afstand / (totale_minuten / 60)
tempo = totale_minuten / afstand

print("Totale tijd:", totale_minuten, "minuten")
print("Gemiddelde snelheid:", round(snelheid, 1), "km/u")
print("Tempo:", round(tempo, 2), "minuten per km")
