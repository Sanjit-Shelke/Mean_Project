const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const DB_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mean_project',
}

let authenticateUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "SELECT * FROM ZESTY WHERE email=? AND password=?";
    const results = await connection.queryAsync(sql, [
        input.email,
        input.password,
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

let adduser = async (input) => {

    const con = mysql.createConnection(DB_CONFIG);
    await con.connectAsync();
    let sql = "INSERT INTO ZESTY (username,email,password,contact) VALUES(?,?,?,?)"
    await con.queryAsync(sql, [
        input.username,
        input.email,
        input.password,
        input.contact,
    ]);
    await con.endAsync();
};

let updateuser = async (input) => {


    const con = mysql.createConnection(DB_CONFIG);
    await con.connectAsync();

    let sql = "UPDATE ZESTY SET password=? WHERE email=?"
    let results = await con.queryAsync(sql, [input.password, input.email]);
    await con.endAsync();

    return results;
}


module.exports = { authenticateUser, adduser, updateuser };

// const DB_CONFIG = {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mean_project",
// };

// let addUser = async (input) => {
    
//     let connection = mysql.createConnection(DB_CONFIG);
    
//     await connection.connectAsync();

//     const sql = "INSERT INTO ZESTY(USERNAME,PASSWORD,EMAIL,CONTACT)VALUES(?,?,?,?)";

//     await connection.queryAsync(sql, [
//         input.username,
//         input.password,
//         input.email,
//         input.contact,
//     ]);

//     await connection.endAsync();
// }

// module.exports = { addUser };