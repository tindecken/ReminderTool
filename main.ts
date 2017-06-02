import {app, BrowserWindow} from 'electron';

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        darkTheme: true,
        width: 400,
        height: 400
    });
    win.loadURL(`file://${__dirname}/index.html`);
    app.setBadgeCount(1);
})

