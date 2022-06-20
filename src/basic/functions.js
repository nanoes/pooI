//declarativas
function myFunction(){
    return 200;
}

//Expresion
/* anonima whitout name below */
var myFunction = function (a,b) {

    var res = a + b
    return a+ b + res;
}

myFunction(10,14);

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Tute');