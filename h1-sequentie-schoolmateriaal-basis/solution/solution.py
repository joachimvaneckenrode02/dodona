aantal_schriften = int(input())
prijs_schrift = int(input())
aantal_pennen = int(input())
prijs_pen = int(input())

kost_schriften = aantal_schriften * prijs_schrift
kost_pennen = aantal_pennen * prijs_pen
totaal = kost_schriften + kost_pennen

print("De schriften kosten", kost_schriften, "euro.")
print("De pennen kosten", kost_pennen, "euro.")
print("In totaal betaal je", totaal, "euro.")
