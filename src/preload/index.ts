import { contextBridge, ipcRenderer } from 'electron'

declare global {
  interface Window {
    versions: {
      homeDir: () => string;
      ping: () => Promise<string>;
      getDirContents: (path: string) => Promise<string[]>
    };
  }
}

// ipcRenderer.on('home-dir', (event, homeDir) => homeDir);

contextBridge.exposeInMainWorld('versions', {
    homeDir: () => process.env.HOME,
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'),
    getDirContents: (path: string) => ipcRenderer.invoke('get-dir-contents', path)
    // we can also expose variables, not just functions
})