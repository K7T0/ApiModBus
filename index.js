// const mariadb = require('mariadb');
// const dbconst= require('./dbconst');
// const pool=mariadb.createPool({
//     host:dbconst.host,
//     user: dbconst.user,
//     password: dbconst.password,
//     database: dbconst.database,
//     connectionLimit: dbconst.connectionLimit});

// const checkDevices = (ip, )
var modbusData= require('./getters/getModBus');

async function main(){
var data= await modbusData.getData('192.168.0.2', 0, 78, 1, 'powys3121');//recupera la data del modBus y la entrega traducida
console.log('data console.log: ',data);

}

main();
const interval= setInterval(main, 3000);
