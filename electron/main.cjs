const path = require("path");
const { app, ipcMain, BrowserWindow } = require("electron");

function createWindow() {
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.cjs")
        }
    });

    if (app.isPackaged) {
        window.loadFile("build/index.html");
    } else {
        window.loadURL("http://localhost:5173");
    }
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

// events

ipcMain.on("quit", () => app.quit());