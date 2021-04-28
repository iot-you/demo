const { ipcRenderer } = require('electron')

const queryMsgBtn = document.getElementById('mysql-query')

queryMsgBtn.addEventListener('click', () => {
    // const reply = ipcRenderer.sendSync('mysql-query-message', 'query')
    // const message = `mysql-query message reply: ${reply}`
    window.query('ss', function (result) {
        document.getElementById('mysql-query-reply').innerHTML = JSON.stringify(result)
    })

})
