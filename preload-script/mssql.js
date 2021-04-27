const mssql = require('mssql') //声明插件

const config = {
    user: 'SA',
    password: 'Ms@12346',
    server: '127.0.0.1',
    database: 'TestDB',
    options: {
        encrypt: true //使用windows azure，需要设置次配置。
    }
}

window.query = function (sql) {
    console.log(config.user)
    mssql.connect(config).then(pool => {
        // Query
        return pool.request()
            .input('input_parameter', mssql.Int, 1)
            .query('select * from mytable where id = @input_parameter')
    }).then(result => {
        console.log("query success")
        return result
    }).catch(err => {
        console.log("query exception")
        console.log(err)
    })
}

mssql.on('error', err => {
    console.log("sql error" + err)
})