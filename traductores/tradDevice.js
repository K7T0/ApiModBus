
const powys3121 = require('./DeviceTable/POWYS3121');

var res=[];
const tradDevice = (data, device, id, address, quantity) =>{
    var traducido;
    if(device == 'powys3121'){
        traducido= powys3121.tabla(data, address, quantity);
        res = '{ "id":'+ id;
        res += ',"modelo":'+ '"'+device+'"';
        res += ',"voltajeF1_N":'+ traducido[0];
        res += ',"voltajeF1_2":'+traducido[1];
        res += ',"corriente_F1":'+ traducido[2];
        res += ',"coseno_F1":'+ traducido[3];
        res += ',"factor_potencia F1":'+ traducido[4];
        res += ',"p_activa_F1":'+ traducido[5];
        res += ',"p_reactiva_F1":'+ traducido[6];
        res += ',"p_aparente_F1":'+ traducido[7];
        res += ',"THDV_F1":'+ traducido[8];
        res += ',"THDI_F1":'+ traducido[9];
        res += ',"voltajeF2_N":'+ traducido[10];
        res += ',"voltajeF2_3":'+traducido[11];
        res += ',"corriente_F2":'+ traducido[12];
        res += ',"coseno_F2":'+ traducido[13];
        res += ',"factor_potencia_F2":'+ traducido[14];
        res += ',"p_activa_F2":'+ traducido[15];
        res += ',"p_reactiva_F2":'+ traducido[16];
        res += ',"p_aparente_F2":'+ traducido[17];
        res += ',"THDV_F2":'+ traducido[18];
        res += ',"THDI_F2":'+ traducido[19];
        res += ',"voltajeF3_N":'+ traducido[20];
        res += ',"voltajeF3_1":'+traducido[21];
        res += ',"corriente_F3":'+ traducido[22];
        res += ',"coseno_F3":'+ traducido[23];
        res += ',"factor_potencia_F3":'+ traducido[24];
        res += ',"p_activa_F3":'+ traducido[25];
        res += ',"p_reactiva_F3":'+ traducido[26];
        res += ',"p_aparente_F3":'+ traducido[27];
        res += ',"THDV_F3":'+ traducido[28];
        res += ',"THDI_F3":'+ traducido[29];
        res += ',"voltaje_l_n":'+ traducido[30];
        res += ',"voltaje_l_l":'+ traducido[31];
        res += ',"corriente_total":'+ traducido[32];
        res += ',"fpotencia_sis":'+ traducido[33];
        res += ',"p_activa_total":'+ traducido[34];
        res += ',"p_reactiva_total":'+ traducido[35];
        res += ',"p_aparente_total":'+ traducido[36];
        res += ',"frecuencia_sistema":'+ traducido[37]+'}';
        return res;
    }
}

module.exports={tradDevice};