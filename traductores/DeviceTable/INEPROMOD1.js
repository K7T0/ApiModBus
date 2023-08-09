const reg = require('../tradModbusRegister');

const get_primera_tabla = (data)=>{
    var res= [];
    var V= reg.tradModbusRegister(data[0], data[1], 'float');
    var L1_V=reg.tradModbusRegister(data[2], data[3], 'float');
    var L2_V=reg.tradModbusRegister(data[4], data[5], 'float');
    var L3_V=reg.tradModbusRegister(data[6], data[7], 'float');
    var frecuencia=reg.tradModbusRegister(data[8], data[9], 'float');
    var I=reg.tradModbusRegister(data[10], data[11], 'float');
    var L1_I=reg.tradModbusRegister(data[12], data[13], 'float');
    var L2_I=reg.tradModbusRegister(data[14], data[15], 'float');
    var L3_I=reg.tradModbusRegister(data[16], data[17], 'float');
    var P_activa=reg.tradModbusRegister(data[18], data[19], 'float');
    var P_l1_activa=reg.tradModbusRegister(data[20], data[21], 'float');
    var P_l2_activa=reg.tradModbusRegister(data[22], data[23], 'float');
    var P_l3_activa=reg.tradModbusRegister(data[24], data[25], 'float');
    var P_reactiva=reg.tradModbusRegister(data[26], data[27], 'float');
    var P_l1_reactiva=reg.tradModbusRegister(data[28], data[29], 'float');
    var P_l2_reactiva=reg.tradModbusRegister(data[30], data[31], 'float');
    var P_l3_reactiva=reg.tradModbusRegister(data[32], data[33], 'float');
    var P_aparente=reg.tradModbusRegister(data[34], data[35], 'float');
    var P_l1_aparente=reg.tradModbusRegister(data[36], data[37], 'float');
    var P_l2_aparente=reg.tradModbusRegister(data[38], data[39], 'float');
    var P_l3_aparente=reg.tradModbusRegister(data[40], data[41], 'float');
    var fp=reg.tradModbusRegister(data[42], data[43], 'float');
    var fp_l1=reg.tradModbusRegister(data[44], data[45], 'float');
    var fp_l2=reg.tradModbusRegister(data[46], data[47], 'float');
    var fp_l3=reg.tradModbusRegister(data[48], data[49], 'float');
    res.push(V, L1_V, frecuencia, I, L1_I, P_activa, P_reactiva, P_aparente, fp);
    return res;
}

module.exports={get_primera_tabla}