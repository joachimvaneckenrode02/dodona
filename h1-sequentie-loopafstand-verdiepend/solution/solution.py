lengte = int(input())
breedte = int(input())
aantal_rondes = int(input())
extra_meter = int(input())

omtrek = 2 * lengte + 2 * breedte
afstand_rondes = omtrek * aantal_rondes
totale_afstand = afstand_rondes + extra_meter

print("Een ronde is", omtrek, "meter.")
print("Na", aantal_rondes, "rondes loop je", afstand_rondes, "meter.")
print("Met de extra afstand erbij loop je", totale_afstand, "meter.")
