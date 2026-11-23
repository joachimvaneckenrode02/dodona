minuten = int(input("Gewerkte minuten: "))
uurloon = float(input("Uurloon: "))

print("Gewerkt:", minuten // 60, "u", minuten % 60, "min")

if minuten > 38 * 60:
    over = minuten - 38 * 60
    print("Overuren:", over // 60, "u", over % 60, "min")
    loon = 38 * uurloon + over / 60 * uurloon * 1.5
else:
    print("Geen overuren.")
    loon = minuten / 60 * uurloon

print("Loon:", round(loon, 2), "euro")
