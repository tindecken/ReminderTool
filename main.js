"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var win;
electron_1.app.on('ready', function () {
    win = new electron_1.BrowserWindow({
        darkTheme: true,
        width: 400,
        height: 400
    });
    win.loadURL("file://" + __dirname + "/index.html");
    electron_1.app.setBadgeCount(1);
});
