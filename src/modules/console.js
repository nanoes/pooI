/* console.log('Algo');
console.info('Algo'); */
//console.warn('something');

/* var table = [
    
    {
        a: 1,
        b: "z",
    },
    {
        a: 2,
        b: "laquesea",
    },
] 
console.table(table); */
//console.log('talk: ')
/* console.group('talking ')

console.log('hi');
console.group('talking2 ')
console.log('bla bla');
console.log('bla bla');
console.log('bla bla');
console.groupEnd('talking2 ') */

/* 
console.log('bye');
console.groupEnd('talking ')

console.log('adsaddsadsa'); */

function function1 (){
console.group('function1')
console.log('fx 1');
function2(); 

console.log('back to the first function');
console.groupEnd('function1')
}

function function2 (){
    console.group('function2')
    console.log('fx 2');
//    function2(); 
    console.groupEnd('function2')
}

console.log('start');

function1();

//for see the count of times into a loops and stuff like that.
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
