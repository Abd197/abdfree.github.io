const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),
  onOpenPlaylist: (callback) => ipcRenderer.on('open-playlist', callback),
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
});