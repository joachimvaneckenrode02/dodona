var gelezenPaginas = 0;
var totaalPaginas = 95;
var paginasPerDag = 12;

var dagen = 0;

while (gelezenPaginas < totaalPaginas) {
    gelezenPaginas = gelezenPaginas + paginasPerDag;
    dagen = dagen + 1;
}

console.log("Na " + dagen + " dagen heeft de leerling " + gelezenPaginas + " pagina's gelezen.");
