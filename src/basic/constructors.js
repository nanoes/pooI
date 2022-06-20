
//constructor
/* 
function car(mark, model, year) {
    this.mark = mark;
    this.model = model;
    this.year = year;
}
 */
/* create objet from before template */
/* var newCar = new car("Tesla", "Model 3", 2020); */ //200OK
// primero hago un array y le digo en un loop que por cada uno de esos nombres del array
    
/* hacer un loop que valla inicializando valores a la funcion padre y valla creando nuevos objEtos */

/* crear 30 nuevas instancias de este constructor */

//puedo hacer un  array dentro de este array con los respectivos datos..
// o pedirselo al user :LMAO:

   function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }