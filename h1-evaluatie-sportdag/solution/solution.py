leerlingen = int(input("Aantal leerlingen: "))
grootte = int(input("Aantal spelers per ploeg: "))

ploegen = leerlingen // grootte
scheidsrechters = leerlingen % grootte
wedstrijden = ploegen // 2
rust = ploegen % 2

print("Aantal ploegen:", ploegen)
print("Aantal scheidsrechters:", scheidsrechters)
print("Aantal wedstrijden tegelijk:", wedstrijden)
print("Aantal ploegen dat rust:", rust)
