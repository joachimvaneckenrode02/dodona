dag = int(input("Vertrekdag (1 = maandag ... 7 = zondag): "))
uur = int(input("Vertrekuur: "))
minuut = int(input("Vertrekminuut: "))
reisduur = int(input("Reisduur in minuten: "))

# alles omzetten naar minuten sinds middernacht van de vertrekdag
aankomst = uur * 60 + minuut + reisduur

nachten = aankomst // 1440
rest = aankomst % 1440
aankomst_uur = rest // 60
aankomst_minuut = rest % 60

# dagen lopen van 1 tot 7: eerst naar 0..6 brengen, dan terug
aankomst_dag = (dag - 1 + nachten) % 7 + 1

# twee cijfers zonder if
tijd = str(aankomst_uur // 10) + str(aankomst_uur % 10) + ":" + str(aankomst_minuut // 10) + str(aankomst_minuut % 10)

# per begonnen kwartier
kwartieren = (reisduur + 14) // 15
prijs = round(4.5 + kwartieren * 0.85, 2)

print("Aankomst: dag " + str(aankomst_dag) + " om " + tijd)
print("Middernacht overschreden:", nachten, "keer")
print("Prijs:", prijs, "euro")
