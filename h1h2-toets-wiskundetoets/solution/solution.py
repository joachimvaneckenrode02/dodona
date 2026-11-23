punten = float(input("Behaalde punten: "))
maximum = int(input("Maximum: "))

percentage = round(punten / maximum * 100, 1)
print("Percentage:", percentage, "%")

if percentage >= 50:
    print("Geslaagd!")
else:
    tekort = round(maximum / 2 - punten, 1)
    print("Niet geslaagd. Je had nog", tekort, "punten nodig.")
