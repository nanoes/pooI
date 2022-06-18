const empleadoObject = [
  { nombre: "matias", edad: 24, salary: 22000 },
  { nombre: "martin", edad: 29, salary: 32000 },
];

//search in the objects
// add elements
// group by props in the objects

let salaryEmployees = empleadoObject.map((empleado) => empleado.salary);

/* let acumulator = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */
let salary = empleadoObject
  .map((empleado) => empleado.salary)
  .reduce((a, b)=>a + b, 0);

//console.log(salaryEmployees);
console.log(`the sallary for all the Employees its : .${salaryEmployees}`);


console.log(`the sallary its : .${salary}`);
