const { ipcRenderer } = require('electron')

const queryMsgBtn = document.getElementById('mysql-query')

queryMsgBtn.addEventListener('click', () => {
    // const reply = ipcRenderer.sendSync('mysql-query-message', 'query')
    // const message = `mysql-query message reply: ${reply}`
    window.query('ss', function (result) {
        document.getElementById('mysql-query-reply').innerHTML = JSON.stringify(result)
        for (var i = 0; i < result.length; i++) {
            $("#mssql-table tbody").append($("<tr><td>" + result[i].user + "</td><td>" + result[i].password + "</td><td>" + result[i].score + "</td><td>" + result[i].type + "</td></tr>"));
        }
    })

})
