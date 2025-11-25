// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron/renderer')
// const os = require('os');
// const fs = require('fs-extra');
// const path = require('path');
// const util = require('util')


const homeDirectoryPath = (() => {
  if (typeof process === 'object' && process.env) {
    // Node.js environment
    return process.env.HOME || process.env.USERPROFILE;
  } else if (typeof navigator === 'object' && navigator.userAgent) {
    // Browser environment
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) {
      // Windows
      return process.env.USERPROFILE;
    } else if (userAgent.includes('mac')) {
      // macOS
      return '/Users/' + (navigator.appVersion.match(/AppleComputer\//i) ? '' : $1);
    } else {
      // Other platforms
      return null;
    }
  } else {
    return null;
  }
})();

// const getDirContent = (dirPath) => {
//     return new Promise((resolve, reject) => {
//         fs.readdir(dirPath, (err, files) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(files.map(file => path.join(dirPath, file)));
//             }
//         });
//     });
// }

contextBridge.exposeInMainWorld('fileManager', {
    // homedir: homeDirectoryPath,
    currentDir: "kdflskmsldkm",
    // getDirContent,
    dirs: (dirPath) => getDirContent(dirPath),
    createFile: () => ipcRenderer.send('create-file'),
    createDir: () => ipcRenderer.send('create-dir'),
    copyFile: (source, destination) => ipcRenderer.send('copy-file', source, destination),
    copyDir: (source, destination) => ipcRenderer.send('copy-dir', source, destination),
    moveFile: (source, destination) => ipcRenderer.send('move-file', source, destination),
    moveDir: (source, destination) => ipcRenderer.send('move-dir', source, destination),
    deleteFile: (path) => ipcRenderer.send('delete-file', path),
    deleteDir: (path) => ipcRenderer.send('delete-dir', path),
    renameFile: (oldPath, newPath) => ipcRenderer.send('rename-file', oldPath, newPath),
    renameDir: (oldPath, newPath) => ipcRenderer.send('rename-dir', oldPath, newPath),
    compressFile: (path) => ipcRenderer.send('compress-file', path),
    decompressFile: (path) => ipcRenderer.send('decompress-file', path),
    compressDir: (path) => ipcRenderer.send('compress-dir', path),
    decompressDir: (path) => ipcRenderer.send('decompress-dir', path),
    openFile: (path) => ipcRenderer.send('open-file', path),
    openDir: (path) => ipcRenderer.send('open-dir', path),
    getFileInfo: (path) => ipcRenderer.invoke('get-file-info', path)
})