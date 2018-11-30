const mysql = require('mysql');

module.exports = function(param){

    console.log(param)
    var connection = mysql.createConnection({
        host : 'cosc304.ok.ubc.ca',
        user : 'mspouge',
        password : '13792149',
        database : 'db_mspouge'
    });

    let sql = "SELECT * FROM Customer WHERE cno = ?";


    var promise = new Promise((resolve,reject)=>{


        connection.query(mysql.format(sql,[param.cno]),(err,res)=>{
            if(err == null)
                resolve(res);
            else
                reject(err);
        })


    })

    var obj =  promise.then(res=>{
        connection.end();

        return res[0];

    }).catch(err=>{
        console.log(err);
        connection.end()
        return err;
    })

    return obj;




}