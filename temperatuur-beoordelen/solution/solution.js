function beoordeelTemperatuur(temperatuur) {
  if (temperatuur < 0) {
    return "Het vriest";
  } else if (temperatuur <= 15) {
    return "Het is koud";
  } else if (temperatuur <= 25) {
    return "Het is aangenaam";
  } else {
    return "Het is warm";
  }
}
