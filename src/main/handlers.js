const { ipcMain } = require('electron');

console.log('ipcMain handlers are loaded')

ipcMain.on('create-file', event => console.log('create-file', event));
ipcMain.on('copy-file', event => console.log('copy-file', event));
ipcMain.on('move-file', event => console.log('move-file', event));
ipcMain.on('paste-file', event => console.log('paste-file', event));
ipcMain.on('delete-file', event => console.log('delete-file', event));
ipcMain.on('rename-file', event => console.log('rename-file', event));
ipcMain.on('open-file', event => console.log('open-file', event));
ipcMain.on('properties-file', event => console.log('properties-file', event));
ipcMain.on('compress-file', event => console.log('compress-file', event));
ipcMain.on('decompress-file', event => console.log('decompress-file', event));

ipcMain.on('create-folder', event => console.log('create-folder', event));
ipcMain.on('copy-folder', event => console.log('copy-folder', event));
ipcMain.on('move-folder', event => console.log('move-folder', event));
ipcMain.on('paste-folder', event => console.log('paste-folder', event));
ipcMain.on('delete-folder', event => console.log('delete-folder', event));
ipcMain.on('rename-folder', event => console.log('rename-folder', event));
ipcMain.on('open-folder', event => console.log('open-folder', event));
ipcMain.on('properties-folder', event => console.log('properties-folder', event));
ipcMain.on('compress-folder', event => console.log('compress-folder', event));
ipcMain.on('decompress-folder', event => console.log('decompress-folder', event));

ipcMain.on('operation-progress', event => console.log('operation-progress', event));
