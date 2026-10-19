getal = int(input("Geef een getal van vier cijfers: "))

duizendtal = getal // 1000
honderdtal = getal // 100 % 10
tiental = getal // 10 % 10
eenheid = getal % 10

som_cijfers = duizendtal + honderdtal + tiental + eenheid
omgekeerd = eenheid * 1000 + tiental * 100 + honderdtal * 10 + duizendtal

print("Som van de cijfers:", som_cijfers)
print("Omgekeerd getal:", omgekeerd)
print("Getal + omgekeerd getal:", getal + omgekeerd)
