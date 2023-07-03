const db=require('../Constantes/dbconst');
const mariadb = require('mariadb');

const pool=mariadb.createPool({
    host:db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    connectionLimit: db.connectionLimit});

const crear_backup = async (data)=>{
    console.log('datos modelo: ',datos.modelo);
}

module.exports={crear_backup};