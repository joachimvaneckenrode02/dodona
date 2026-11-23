import math

oppervlakte = float(input("Oppervlakte van de tuin (m²): "))
budget = float(input("Budget (euro): "))

zijde = math.sqrt(oppervlakte)
omtrek = 4 * zijde
rollen = math.ceil(omtrek / 25)
kostprijs = round(rollen * 39.99, 2)

print("Omtrek:", round(omtrek, 1), "m")
print("Aantal rollen:", rollen)
print("Kostprijs:", kostprijs, "euro")

if kostprijs <= budget:
    print("Je budget volstaat. Je houdt", round(budget - kostprijs, 2), "euro over.")
else:
    print("Je budget is te klein. Je komt", round(kostprijs - budget, 2), "euro tekort.")
