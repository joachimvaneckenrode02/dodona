bestemming = input("Bestemming: ")
leerlingen = int(input("Aantal leerlingen: "))
leerkrachten = int(input("Aantal leerkrachten: "))
prijs_ticket = float(input("Prijs van 1 ticket: "))
kost_bus = float(input("Kostprijs van de bus: "))

totaal = (leerlingen + leerkrachten) * prijs_ticket + kost_bus
per_leerling = totaal / leerlingen

print("Uitstap naar " + bestemming + ".")
print("Totale kostprijs: " + str(round(totaal, 2)) + " euro")
print("Prijs per leerling: " + str(round(per_leerling, 2)) + " euro")
