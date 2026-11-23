aantal = int(input("Aantal tickets: "))

if aantal >= 10:
    prijs = 10
    totaal = aantal * prijs
    besparing = aantal * 12 - totaal
    print("Prijs per ticket:", prijs, "euro")
    print("Totaal te betalen:", totaal, "euro")
    print("Je bespaart", besparing, "euro dankzij de groepsprijs.")
else:
    prijs = 12
    totaal = aantal * prijs
    print("Prijs per ticket:", prijs, "euro")
    print("Totaal te betalen:", totaal, "euro")
