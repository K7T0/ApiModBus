
var modbus = require('modbus-stream');
var trad= require('../traductores/tradDevice');

const getData = (ip, address, quantity, unitId)=>{
    //genera promesa en espera a los datos
    return new Promise((resolve, reject)=>{
        //se conecta por modbus a la ip del gateway
        modbus.tcp.connect(502, ip, {debug:'Actinno_Modbus', retries:1, retry:1000}, (err, connection) => {
            if(err){
                console.log('error ModBus: ', err);
                resolve(err)
            }
            else{
                for(var i=0; i<quantity; i+=100){
                    //lee los registros del esclavo dado por unitId
                    connection.readHoldingRegisters({address: address, quantity: quantity, extra:{unitId:unitId}},(err, res)=>{
                        if(err){
                            console.log('error lectura: ', err);
                            resolve(err)
                        }
                        else{
                            // console.log(res.response.data)
                            const [json, curl]=trad.tradDevice(res.response.data, 'powys3121', unitId, address, quantity);
                            resolve([json, curl]);
                        }
                })
            }}
        });
    });
}

module.exports = {getData}