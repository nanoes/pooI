
const fs = require('fs');


function read(ruta , cb){
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    })
}

/* read(__dirname + '/arch.txt', console.log);
 */

function write(root , content , cb){
    fs.writeFile(root, content, function (err) {
        if (err) {
            console.error('No eh podido escribirlo', err)
        }else{
            console.log('se ha escrito correctly')
        }
    });
}

//write( __dirname + '/arch1.txt', 'im a new file' , console.log);

function borrar(root, cb){
    fs.unlink(root, cb);
}

borrar(__dirname + '/arch1.txt', console.log)