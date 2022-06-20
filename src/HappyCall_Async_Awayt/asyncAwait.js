
async function hi(name , myCallback) {
    return new Promise(
        function(resolve, reject) {
            
            setTimeout(function () {
                console.log('hi '+ name );
                resolve(name);
            }, 1000);
        }
    );
}
hi();
async function main() {
 let name = await hi(name); 

    await speack();
    await speack();
    await speack();
    await bye(name);
}

console.log('Start to process Asnc/Aw');
main();
console.log('end process');
function speack(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla ....');
            resolve(name);
        }, 1000);
    });
}

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bye', name);
            reject('have error');
            /* resolve(); */
        }, 1000);
    }); 
}

/*
  console.log("finish process....");
hi("Tute",function () {
    bye('tute', function() {
        console.log("finish process....");
    })
});
 */

/* festin fest desarrollar */
//discord reyOnclick

console.log('init proces...');
hi('Matias')
    .then(speack)
    .then(bye)
        .then((name) => {
        console.log("finish process....");
    })
    .catch( error => {
        console.error('an error has ocurency: ');
        console.error(error);
    } )