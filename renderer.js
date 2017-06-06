"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var $ = require("jquery");
var electron = require('electron');
var ipc = electron.ipcRenderer;
$("#btnGo").bind('click', function () {
    console.log("AAAAAAAAAAAAAAAA");
    ipc.send('GO');
});
ipc.send('clickbutton');
ipc.on('OK', function () {
    $("#input").val("AAAAAAAAAAAAAAAA");
    ipc.send("duocroi");
});
