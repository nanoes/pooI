//scope      global
var nombre = "matias";

function fun() {

    //scope local
    var apellido = "flores";
    return nombre + "" + apellido;
}

fun();

var funcionScope = function(){
   var varLocal = 1 ;
    return varLocal;
}