import math

d_groot = float(input("Diameter grote pizza (cm): "))
p_groot = float(input("Prijs grote pizza: "))
d_medium = float(input("Diameter medium pizza (cm): "))
p_actie = float(input("Prijs voor 2 medium pizza's: "))

opp_groot = math.pi * (d_groot / 2) ** 2
opp_medium = 2 * math.pi * (d_medium / 2) ** 2

per100_groot = p_groot / opp_groot * 100
per100_medium = p_actie / opp_medium * 100

print("Oppervlakte grote pizza:", round(opp_groot, 1), "cm2")
print("Oppervlakte 2 medium pizza's:", round(opp_medium, 1), "cm2")
print("Grote pizza:", round(per100_groot, 2), "euro per 100 cm2")
print("2 medium pizza's:", round(per100_medium, 2), "euro per 100 cm2")

if per100_groot <= per100_medium:
    print("Beste keuze: de grote pizza")
else:
    print("Beste keuze: 2 medium pizza's")
