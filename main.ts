import {app, BrowserWindow, Tray, ipcMain} from 'electron';
const electron = require('electron');
import * as $ from "jquery";
import {countdown} from './utilities';

const ipc = electron.ipcMain
let mainWindow
let tray = null
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 310,
        height: 90,
        resizable: false,
        minimizable: false,
        maximizable: false
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    // mainWindow.webContents.openDevTools(); //mainWindow.openDevTools()
    mainWindow.on('close', ()=>{
        mainWindow = null;
    })

    //Tray icon
    tray = new Tray(`${__dirname}/icon.ico`);



    // let contents = mainWindow.webContents;
    // console.log(contents)

})

ipc.on("GO", (event, count) => {
    mainWindow.hide()
    tray.destroy()
    tray = new Tray(`${__dirname}/icon.ico`)
    tray.on('right-click', () => {
        app.quit()
    })

    tray.on('double-click', () => {
        clearInterval(timer)
        mainWindow.webContents.send('continue')
        // console.log('Tray clicked');
    })

    let timer = setInterval(_ => {
        console.log("Count:" + count)
        mainWindow.webContents.send('countdown', count)
        count--
        if (count === -1){
            tray.destroy()
            tray = new Tray(`${__dirname}/icon_alert.ico`)
            tray.displayBalloon({
                title: "",
                content: "Time Up"
            })
            tray.on('double-click', () => {
                mainWindow.webContents.send('continue')
            });

            tray.on('right-click', () => {
                app.quit()
            });
            clearInterval(timer)
            // mainWindow.webContents.send('finish')
        }
    }, 1000)
})




