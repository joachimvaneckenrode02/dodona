import math

aankomst_uur = int(input("Aankomst uur: "))
aankomst_min = int(input("Aankomst minuut: "))
vertrek_uur = int(input("Vertrek uur: "))
vertrek_min = int(input("Vertrek minuut: "))

duur = (vertrek_uur * 60 + vertrek_min) - (aankomst_uur * 60 + aankomst_min)
print("Parkeerduur:", duur // 60, "u", duur % 60, "min")

if duur <= 30:
    print("Gratis parkeren!")
else:
    uren = math.ceil(duur / 60)
    prijs = round(uren * 2.4, 2)
    if prijs > 15:
        print("Te betalen: 15.0 euro (dagtarief)")
    else:
        print("Te betalen:", prijs, "euro")
