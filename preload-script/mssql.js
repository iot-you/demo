const mssql = require('mssql') //声明插件

const config = {
    user: 'SA',
    password: 'Ms@12346',
    server: '113.31.105.18',
    database: 'TestDB',
    options: {
        encrypt: true //使用windows azure，需要设置次配置。
    }
}

window.query = function (sql, callback) {
    return mssql.connect(config).then(pool => {
        return pool.request()
            .input('input_parameter', mssql.Int, 100)
            .query('select * from mytable where score = @input_parameter')
    }).then(result => {
        callback(result.recordset)
    }).catch(err => {
        console.log("query exception")
        console.log(err)
    })
}

mssql.on('error', err => {
    console.log("sql error" + err)
})