import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
    quit: () => ipcRenderer.send("quit")
});