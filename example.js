// prototipes   
// filter   , find 
// for if

const objBarber = [
    {
        nombre: "tute",
        tipo: "peluquero",
        comision: 5000, 
        cortes : 12
    },
    {
        nombre:  "Juan",
        tipo: "peluquero",
        comision: 6000,
        cortes : 10
    },
    {
        nombre: "Pedro",
        tipo: "peluquero",
        comision: 7000,
        cortes : 8
    }

]

let peluqueros = objBarber.filter(barber => barber.tipo =="peluquero");

console.log(peluqueros);