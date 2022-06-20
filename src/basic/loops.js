var students = ["tute", "pet", "maria", "lol"];

function sayHi(student) {
    console.log(`Hi , ${student}`);
}

for (let index = 0; index < students.length; index++) {
   // const element = array[index];
    sayHi(students[index]);
}
var dogs = ["tute", "pet", "maria", "lol"];

for (var dog of dogs) {
 //   const element = var student];
   sayHi(dog); 
}

/* ################################################################################ */

var students = ["tute", "pet", "maria", "lol"];
function sayHi(student) {
    console.log(`Hi , ${student}`);
}
while (students.length>0) {
    console.log(students);
    var student = students.shift();
    sayHi(student);
}