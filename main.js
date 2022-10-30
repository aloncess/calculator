const { app, BrowserWindow } = require('electron')
const path = require('path')

/*function that creates the browser window and loads index.html into a new BrowserWindow instance*/
function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

/*Calling the createWindow() function to open the window*/
app.whenReady().then(() => {
    createWindow()

    /*Listening for the app module's activate event, and calling the existing createWindow() method if no browser windows are open.*/
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})