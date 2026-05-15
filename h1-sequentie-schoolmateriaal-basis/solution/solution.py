naam = input()
aantal_schriften = int(input())
prijs_schrift = float(input())
aantal_potloden = int(input())
potloden_per_doos = int(input())
prijs_doos = float(input())

kost_schriften = aantal_schriften * prijs_schrift
aantal_dozen = aantal_potloden // potloden_per_doos + 1
over = aantal_dozen * potloden_per_doos - aantal_potloden
kost_potloden = aantal_dozen * prijs_doos
totaal = kost_schriften + kost_potloden

kost_schriften = round(kost_schriften, 2)
kost_potloden = round(kost_potloden, 2)
totaal = round(totaal, 2)

print("Bestelling voor " + naam + ".")
print("De schriften kosten", kost_schriften, "euro.")
print("Je koopt", aantal_dozen, "dozen potloden.")
print("Er zijn", over, "potloden over.")
print("De potloden kosten", kost_potloden, "euro.")
print("In totaal betaal je", totaal, "euro.")
