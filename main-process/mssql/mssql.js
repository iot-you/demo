const { ipcMain } = require('electron')

ipcMain.on('mysql-query-message', (event, arg) => {
    event.returnValue = 'success'
})
