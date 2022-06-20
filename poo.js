class Persona {
  //atributos viejas variables.
  //metodos --> funciones
  //setters
  //getters

  set name(n) {
    this.nombre = n;
  }

  set lastname(L) {
    this.name = this.lastname;
  }

  get names(){
    return this.nombre;
  }

  get lastname(){
    return this.lastname;
  }

  get music(){
    return this.music    ;
  }


}

let person1 =  new Persona(); // crea un objeto persona de la clase Persona (instanciar)

person1.name = 'matias';
person1.lastnames = 'flores';


console.log(person1.names);
console.log(person1.lastnames);


let person2 = new Persona();

person2.name = 'Ariel';

person1.music = [ 'Tango', 'Jazz']
