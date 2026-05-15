lengte = 28
breedte = 15
aantal_rondes = 3
extra_meter = 35

omtrek = 2 * lengte + 2 * breedte
afstand_rondes = omtrek * aantal_rondes
totale_afstand = afstand_rondes + extra_meter

print("Een ronde is", omtrek, "meter.")
print("Na", aantal_rondes, "rondes loop je", afstand_rondes, "meter.")
print("Met de extra afstand erbij loop je", totale_afstand, "meter.")
