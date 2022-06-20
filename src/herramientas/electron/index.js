const { app ,  Browserwindow } = require('electron');

let mainWindow;
//let mainWindow;
app.on('ready', createWindow);

function createWindow() {
    mainWindow = new Browserwindow ({
        width: 800,
        height: 600,
    });

    mainWindow.loadFile('index.html');      // load the index.html file
}