"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var $ = require("jquery");
var electron = require('electron');
var ipc = electron.ipcRenderer;
var remote = electron.remote;
var count;
$("#btnGo").bind('click', function () {
    count = Number($("#input").val());
    console.log("AAAAAAAAAAAAAAAA");
    ipc.send('GO', count);
});
ipc.on('countdown', function (evt, count) {
    $("#input").val(count);
});
ipc.on('continue', function () {
    ipc.send('GO', count);
});
