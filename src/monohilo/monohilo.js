console.log("hi world");

let i= 0 ;
setInterval(function () {
    console.log("keep alive atr");
    i++;
/* 
    if (i == 5) {

        var a = 3 ;
        var b =  a + z;
    } */
}, 2000);

// el monohilo puede romper si tenes errores...

//this line are executed before monohilo
console.log("second instruction");