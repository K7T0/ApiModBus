var modbus= require('modbus-stream');
const gateways= {"ip": {
    '10.10.11.253': [3],
}};

const getData = (ip, address, quantity, unitId)=>{
    // var data=[];
    //genera promesa en espera a los datos
    return new Promise((resolve, reject)=>{
        //se conecta por modbus a la ip del gateway
        modbus.tcp.connect(502, ip, {debug:'Actinno_Modbus', retries:3, retry:1000}, (err, connection) => {
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
                            console.log('respuesta : ',res.response.data)
                            resolve(res.response.data);
                        }
                })
            }}
        });
    });
}

async function test(){
for(var ip in gateways.ip){
    // var data= await getData('192.168.0.2', 0, 100, 1, 'powys3121');//recupera la data del modBus y la entrega traducida
    // console.log('data console.log: ',data);
    for( var device in gateways.ip[ip]){
        console.log('ip', ip, ' device', gateways.ip[ip][device]);
        var data= await getData('10.10.11.253', 0x5000, 2, gateways.ip[ip][device], 'powys3121');//recupera la data del modBus y la entrega traducida
        console.log('data console.log: ',data[0]);
    }
}


}


test();

const interval= setInterval(test, 60000);