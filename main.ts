import {app, BrowserWindow, Tray, ipcMain} from 'electron';
const electron = require('electron');
import * as $ from "jquery";
import {countdown} from './utilities';

const ipc = electron.ipcMain;
let mainWindow;
let tray = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        // darkTheme: false,
        width: 1200,
        height: 400,
        // backgroundColor: '#2e2c29'
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools(); //mainWindow.openDevTools()
    mainWindow.on('close', ()=>{
        mainWindow = null;
    })

    //Tray icon
    tray = new Tray(`${__dirname}/icon.ico`);
    tray.setToolTip("App is running");

    // //Add listener to button GO
    //
    //
    // if($.isReady){
    //     $("#btnGo").bind('click', () => console.log('Button clicked'));
    // }

    let contents = mainWindow.webContents;
    console.log(contents)

})

ipcMain.on('GO', (event, count) => {
    console.log(count);
    countdown(count);
    console.log(count);
    mainWindow.webContents.send('OK');
});

// ipcMain.on("duocroi", ()=>{
//     tray.setToolTip("DDDDDDDDDDDDDdd")
// })
//
// ipcMain.on('countdown', (event, count)=>{
//     tray.setToolTip();
// })