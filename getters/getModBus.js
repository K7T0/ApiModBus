
var modbus = require('modbus-stream');
var trad= require('../traductores/tradDevice');

const reg_cantidad=(modelo)=>{
    switch(modelo){
        case 'powys3121':
            return [0,78];
        case 'powys1120':
            return [0,20];
        case 'inepromod1':
            return [0x5000, 50];
        default:
            return [0,78];
    }
}

const getData = (ip, unitId, modelo)=>{
    //genera promesa en espera a los datos
    return new Promise((resolve, reject)=>{
        //se conecta por modbus a la ip del gateway
        modbus.tcp.connect(502, ip, {debug:'Actinno_Modbus', retries:2, retry:500}, (err, connection) => {
            if(err){
                console.log('error ModBus: ', err);
                resolve(err)
            }
            else{
                    //lee los registros del esclavo dado por unitId
                    var [address, quantity]=reg_cantidad(modelo);
                    console.log('address: ', address, 'quantity: ', quantity);
                    connection.readHoldingRegisters({address: address, quantity: quantity, extra:{unitId:unitId}},(err, res)=>{
                        if(err){
                            console.log('error lectura: ', err);
                            resolve(err)
                        }
                        else{
                            console.log('modelo:', modelo);
                            const [json, curl]=trad.tradDevice(res.response.data, modelo, unitId, address, quantity);
                            // console.log('json: ', json, 'curl: ', curl)
                            resolve([json, curl]);
                        }
                })
            }
        });
    });
}

module.exports = {getData}