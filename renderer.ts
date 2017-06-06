// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import * as $ from "jquery";

const electron = require('electron');
const ipc = electron.ipcRenderer

$("#btnGo").bind('click', () => {
    console.log("AAAAAAAAAAAAAAAA");
    ipc.send('GO', $("#input").val());
});

ipc.on('OK', ()=>{
    ipc.send("duocroi");
})