var gewicht = 72;
var lengte = 1.78;

var bmi = gewicht / (lengte * lengte);
var zone = "";

if (bmi < 18.5) {
  zone = "onder de gezonde zone";
} else if (bmi < 25) {
  zone = "gezonde zone";
} else if (bmi < 30) {
  zone = "verhoogde zone";
} else {
  zone = "hoge zone";
}

console.log("Je BMI is " + bmi.toFixed(1) + ". Dat valt in de " + zone + ".");
