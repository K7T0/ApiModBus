const reg = require('../tradModbusRegister');

const get_primera_tabla = (data)=>{
    var res= [];
    var V= reg.tradModbusRegister(data[0], data[1], 'float');
    var C= reg.tradModbusRegister(data[2], data[3], 'float');
    var f= reg.tradModbusRegister(data[4], data[5], 'float');
    var cosphi= reg.tradModbusRegister(data[6], data[7], 'float');
    var FP= reg.tradModbusRegister(data[8], data[9], 'float');
    var P_activa= reg.tradModbusRegister(data[10], data[11], 'float');
    var P_reactiva= reg.tradModbusRegister(data[12], data[13], 'float');
    var P_aparente= reg.tradModbusRegister(data[14], data[15], 'float');
    var THDV= reg.tradModbusRegister(data[16], data[17], 'float');
    var THDI= reg.tradModbusRegister(data[18], data[19], 'float');
    res.push(V, C, f, cosphi, FP, P_activa, P_reactiva, P_aparente, THDV, THDI);
    return res;
}

module.exports={get_primera_tabla}