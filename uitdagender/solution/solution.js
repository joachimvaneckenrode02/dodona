var grens = 300;
var aantal = 0;

var eerste = 2;

while (eerste <= grens) {
    var somEerste = 0;

    for (var deler = 1; deler < eerste; deler = deler + 1) {
        if (eerste % deler === 0) {
            somEerste = somEerste + deler;
        }
    }

    var tweede = somEerste;

    if (tweede > eerste && tweede <= grens) {
        var somTweede = 0;

        for (var deler2 = 1; deler2 < tweede; deler2 = deler2 + 1) {
            if (tweede % deler2 === 0) {
                somTweede = somTweede + deler2;
            }
        }

        if (somTweede === eerste) {
            console.log(eerste + " en " + tweede);
            aantal = aantal + 1;
        }
    }

    eerste = eerste + 1;
}

console.log("aantal: " + aantal);
