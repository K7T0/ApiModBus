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
var save= require('./backup/backupDB');
var ips= require('./getters/getGWMB');
var send= require('./curl/send');

async function main(){
// var data= await modbusData.getData('192.168.1.2', 0, 78, 5, 'powys3121');//recupera la data del modBus y la entrega traducida
// console.log('data console.log: ',data);
const json= await ips.consulta_datas(process.argv[2]);
for (var device of json.Consultas){
    var [data_json, data_curl]=await modbusData.getData(json.ip_gateway, 0, 78, device.id, device.modelo);
    const JSONdata= JSON.parse(data_json);
    // console.log('JSONdata: ', JSONdata);
    // console.log('data_curl: ', data_curl);
    send.curl(data_curl);
    let backup= save.crear_backup(JSONdata);
    // save.crear_backup();
}
}


main();
const interval= setInterval(main, 60000);
