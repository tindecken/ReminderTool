// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import * as $ from "jquery"

const electron = require('electron')
const ipc = electron.ipcRenderer
const remote = electron.remote
let count: number
let isRunning: boolean = false


$("#btnGo").bind('click', () => {
    count = Number($("#input").val())
    console.log("AAAAAAAAAAAAAAAA");
    ipc.send('GO', count);
});

ipc.on('countdown', (evt, count)=>{
    $("#input").val(count)
})

ipc.on('continue', () => {
    ipc.send('GO', count);
})