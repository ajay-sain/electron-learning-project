import {ipcMain } from 'electron';

ipcMain.handle('get-home-dir', async (event, arg) => {
    console.log("event", event);
    console.log("arg", arg);
});