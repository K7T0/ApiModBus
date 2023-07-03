
const powys3121 = require('./DeviceTable/POWYS3121');
const util = require('../getters/getFecha')

var res=[];
const tradDevice = (data, device, id, address, quantity) =>{
    res = '{ "id":'+ id;
    res += ',"modelo":'+ '"'+device+'"';
    res += ',"fecha":'+ '"'+util.fechahora()+'"';
    var traducido;
    if(device == 'powys3121'){
        //info basica
        if(address==0){
            traducido= powys3121.get_basica(data);
            res += ',"voltajeF1_N":'+ traducido[0];
            res += ',"voltajeF1_2":'+traducido[1];
            res += ',"corriente_F1":'+ traducido[2];
            res += ',"coseno_F1":'+ traducido[3];
            res += ',"factor_potencia_F1":'+ traducido[4];
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
        //info Armonicos Fase1
        if(address==78){
            traducido= powys3121.get_F1_A(data);
            res += ',"Armonico_1_V_F1":'+ traducido[0];
            res += ',"Armonico_3_V_F1":'+ traducido[1];
            res += ',"Armonico_5_V_F1":'+ traducido[2];
            res += ',"Armonico_7_V_F1":'+ traducido[3];
            res += ',"Armonico_9_V_F1":'+ traducido[4];
            res += ',"Armonico_11_V_F1":'+ traducido[5];
            res += ',"Armonico_13_V_F1":'+ traducido[6];
            res += ',"Armonico_15_V_F1":'+ traducido[7];
            res += ',"Armonico_17_V_F1":'+ traducido[8];
            res += ',"Armonico_19_V_F1":'+ traducido[9];
            res += ',"Armonico_21_V_F1":'+ traducido[10];
            res += ',"Armonico_23_V_F1":'+ traducido[11];
            res += ',"Armonico_25_V_F1":'+ traducido[12];
            res += ',"Armonico_27_V_F1":'+ traducido[13];
            res += ',"Armonico_29_V_F1":'+ traducido[14];
            res += ',"Armonico_31_V_F1":'+ traducido[15];
            res += ',"Armonico_1_I_F1":'+ traducido[16];
            res += ',"Armonico_3_I_F1":'+ traducido[17];
            res += ',"Armonico_5_I_F1":'+ traducido[18];
            res += ',"Armonico_7_I_F1":'+ traducido[19];
            res += ',"Armonico_9_I_F1":'+ traducido[20];
            res += ',"Armonico_11_I_F1":'+ traducido[21];
            res += ',"Armonico_13_I_F1":'+ traducido[22];
            res += ',"Armonico_15_I_F1":'+ traducido[23];
            res += ',"Armonico_17_I_F1":'+ traducido[24];
            res += ',"Armonico_19_I_F1":'+ traducido[25];
            res += ',"Armonico_21_I_F1":'+ traducido[26];
            res += ',"Armonico_23_I_F1":'+ traducido[27];
            res += ',"Armonico_25_I_F1":'+ traducido[28];
            res += ',"Armonico_27_I_F1":'+ traducido[29];
            res += ',"Armonico_29_I_F1":'+ traducido[30];
            res += ',"Armonico_31_I_F1":'+ traducido[31]+'}';
            return res;

        }
        //info Armonicos Fase2
        if(address==142){
            traducido= powys3121.get_F2_A(data);
            res += ',"Armonico_1_V_F2":'+ traducido[0];
            res += ',"Armonico_3_V_F2":'+ traducido[1];
            res += ',"Armonico_5_V_F2":'+ traducido[2];
            res += ',"Armonico_7_V_F2":'+ traducido[3];
            res += ',"Armonico_9_V_F2":'+ traducido[4];
            res += ',"Armonico_11_V_F2":'+ traducido[5];
            res += ',"Armonico_13_V_F2":'+ traducido[6];
            res += ',"Armonico_15_V_F2":'+ traducido[7];
            res += ',"Armonico_17_V_F2":'+ traducido[8];
            res += ',"Armonico_19_V_F2":'+ traducido[9];
            res += ',"Armonico_21_V_F2":'+ traducido[10];
            res += ',"Armonico_23_V_F2":'+ traducido[11];
            res += ',"Armonico_25_V_F2":'+ traducido[12];
            res += ',"Armonico_27_V_F2":'+ traducido[13];
            res += ',"Armonico_29_V_F2":'+ traducido[14];
            res += ',"Armonico_31_V_F2":'+ traducido[15];
            res += ',"Armonico_1_I_F2":'+ traducido[16];
            res += ',"Armonico_3_I_F2":'+ traducido[17];
            res += ',"Armonico_5_I_F2":'+ traducido[18];
            res += ',"Armonico_7_I_F2":'+ traducido[19];
            res += ',"Armonico_9_I_F2":'+ traducido[20];
            res += ',"Armonico_11_I_F2":'+ traducido[21];
            res += ',"Armonico_13_I_F2":'+ traducido[22];
            res += ',"Armonico_15_I_F2":'+ traducido[23];
            res += ',"Armonico_17_I_F2":'+ traducido[24];
            res += ',"Armonico_19_I_F2":'+ traducido[25];
            res += ',"Armonico_21_I_F2":'+ traducido[26];
            res += ',"Armonico_23_I_F2":'+ traducido[27];
            res += ',"Armonico_25_I_F2":'+ traducido[28];
            res += ',"Armonico_27_I_F2":'+ traducido[29];
            res += ',"Armonico_29_I_F2":'+ traducido[30];
            res += ',"Armonico_31_I_F2":'+ traducido[31]+'}';
            return res;
        }
        //info Armonicos Fase3
        if(address==206){
            traducido= powys3121.get_F3_A(data);
            res += ',"Armonico_1_V_F3":'+ traducido[0];
            res += ',"Armonico_3_V_F3":'+ traducido[1];
            res += ',"Armonico_5_V_F3":'+ traducido[2];
            res += ',"Armonico_7_V_F3":'+ traducido[3];
            res += ',"Armonico_9_V_F3":'+ traducido[4];
            res += ',"Armonico_11_V_F3":'+ traducido[5];
            res += ',"Armonico_13_V_F3":'+ traducido[6];
            res += ',"Armonico_15_V_F3":'+ traducido[7];
            res += ',"Armonico_17_V_F3":'+ traducido[8];
            res += ',"Armonico_19_V_F3":'+ traducido[9];
            res += ',"Armonico_21_V_F3":'+ traducido[10];
            res += ',"Armonico_23_V_F3":'+ traducido[11];
            res += ',"Armonico_25_V_F3":'+ traducido[12];
            res += ',"Armonico_27_V_F3":'+ traducido[13];
            res += ',"Armonico_29_V_F3":'+ traducido[14];
            res += ',"Armonico_31_V_F3":'+ traducido[15];
            res += ',"Armonico_1_I_F3":'+ traducido[16];
            res += ',"Armonico_3_I_F3":'+ traducido[17];
            res += ',"Armonico_5_I_F3":'+ traducido[18];
            res += ',"Armonico_7_I_F3":'+ traducido[19];
            res += ',"Armonico_9_I_F3":'+ traducido[20];
            res += ',"Armonico_11_I_F3":'+ traducido[21];
            res += ',"Armonico_13_I_F3":'+ traducido[22];
            res += ',"Armonico_15_I_F3":'+ traducido[23];
            res += ',"Armonico_17_I_F3":'+ traducido[24];
            res += ',"Armonico_19_I_F3":'+ traducido[25];
            res += ',"Armonico_21_I_F3":'+ traducido[26];
            res += ',"Armonico_23_I_F3":'+ traducido[27];
            res += ',"Armonico_25_I_F3":'+ traducido[28];
            res += ',"Armonico_27_I_F3":'+ traducido[29];
            res += ',"Armonico_29_I_F3":'+ traducido[30];
            res += ',"Armonico_31_I_F3":'+ traducido[31]+'}';
            return res;
        }
        //info maximos 
        if(address==270){
            traducido= powys3121.get_Max(data);
            res += ',"Max_V_F1N":'+ traducido[0];
            res += ',"Max_V_F1L":'+ traducido[1];
            res += ',"Max_I_F1":'+ traducido[2];
            res += ',"cosMax_F1":'+ traducido[3];
            res += ',"fpMax_F1":'+ traducido[4];
            res += ',"p_activa_max_F1":'+ traducido[5];
            res += ',"p_reactiva_max_F1":'+ traducido[6];
            res += ',"p_aparente_max_F1":'+ traducido[7];
            res += ',"THD_Vmax_F1":'+ traducido[8];
            res += ',"THD_Imax_F1":'+ traducido[9];
            res += ',"Max_V_F2N":'+ traducido[10];
            res += ',"Max_V_F2L":'+ traducido[11];
            res += ',"Max_I_F2":'+ traducido[12];
            res += ',"cosMax_F2":'+ traducido[13];
            res += ',"fpMax_F2":'+ traducido[14];
            res += ',"p_activa_max_F2":'+ traducido[15];
            res += ',"p_reactiva_max_F2":'+ traducido[16];
            res += ',"p_aparente_max_F2":'+ traducido[17];
            res += ',"THD_Vmax_F2":'+ traducido[18];
            res += ',"THD_Imax_F2":'+ traducido[19];
            res += ',"Max_V_F3N":'+ traducido[20];
            res += ',"Max_V_F3L":'+ traducido[21];
            res += ',"Max_I_F3":'+ traducido[22];
            res += ',"cosMax_F3":'+ traducido[23];
            res += ',"fpMax_F3":'+ traducido[24];
            res += ',"p_activa_max_F3":'+ traducido[25];
            res += ',"p_reactiva_max_F3":'+ traducido[26];
            res += ',"p_aparente_max_F3":'+ traducido[27];
            res += ',"THD_Vmax_F3":'+ traducido[28];
            res += ',"THD_Imax_F3":'+ traducido[29];
            res += ',"Vmax_prom_LN":'+ traducido[30];
            res += ',"Vmax_prom_LL":'+ traducido[31];
            res += ',"Imax_total":'+ traducido[32];
            res += ',"fpmax_sistema":'+ traducido[33];
            res += ',"p_activa_max_total":'+ traducido[34];
            res += ',"p_reactiva_max_total":'+ traducido[35];
            res += ',"p_aparente_max_total":'+ traducido[36];
            res += ',"f_max_sistema":'+ traducido[37];
            res += ',"I_neutro_max":'+ traducido[38]+'}';
            return res;
        }
        //info minimos
        if(address==348){
            traducido= powys3121.get_Min(data);
            res += ',"Min_V_F1N":'+ traducido[0];
            res += ',"Min_V_F1L":'+ traducido[1];
            res += ',"Min_I_F1":'+ traducido[2];
            res += ',"cosMin_F1":'+ traducido[3];
            res += ',"fpMin_F1":'+ traducido[4];
            res += ',"p_activa_min_F1":'+ traducido[5];
            res += ',"p_reactiva_min_F1":'+ traducido[6];
            res += ',"p_aparente_min_F1":'+ traducido[7];
            res += ',"THD_Vmin_F1":'+ traducido[8];
            res += ',"THD_Imin_F1":'+ traducido[9];
            res += ',"Min_V_F2N":'+ traducido[10];
            res += ',"Min_V_F2L":'+ traducido[11];
            res += ',"Min_I_F2":'+ traducido[12];
            res += ',"cosMin_F2":'+ traducido[13];
            res += ',"fpMin_F2":'+ traducido[14];
            res += ',"p_activa_min_F2":'+ traducido[15];
            res += ',"p_reactiva_min_F2":'+ traducido[16];
            res += ',"p_aparente_min_F2":'+ traducido[17];
            res += ',"THD_Vmin_F2":'+ traducido[18];
            res += ',"THD_Imin_F2":'+ traducido[19];
            res += ',"Min_V_F3N":'+ traducido[20];
            res += ',"Min_V_F3L":'+ traducido[21];
            res += ',"Min_I_F3":'+ traducido[22];
            res += ',"cosMin_F3":'+ traducido[23];
            res += ',"fpMin_F3":'+ traducido[24];
            res += ',"p_activa_min_F3":'+ traducido[25];
            res += ',"p_reactiva_min_F3":'+ traducido[26];
            res += ',"p_aparente_min_F3":'+ traducido[27];
            res += ',"THD_Vmin_F3":'+ traducido[28];
            res += ',"THD_Imin_F3":'+ traducido[29];
            res += ',"Vmin_prom_LN":'+ traducido[30];
            res += ',"Vmin_prom_LL":'+ traducido[31];
            res += ',"Imin_total":'+ traducido[32];
            res += ',"fpmin_sistema":'+ traducido[33];
            res += ',"p_activa_min_total":'+ traducido[34];
            res += ',"p_reactiva_min_total":'+ traducido[35];
            res += ',"p_aparente_min_total":'+ traducido[36];
            res += ',"f_min_sistema":'+ traducido[37];
            res += ',"I_neutro_min":'+ traducido[38]+'}';
            return res;
        }
        //info demandas
        if(address==428){
            traducido= powys3121.get_demanda(data);
            res += ',"d_I_F1":'+ traducido[0];
            res += ',"d_I_F2":'+ traducido[1];
            res += ',"d_I_F3":'+ traducido[2];
            res += ',"d_I_total":'+ traducido[3];
            res += ',"d_p_activa_F1":'+ traducido[4];
            res += ',"d_p_activa_F2":'+ traducido[5];
            res += ',"d_p_activa_F3":'+ traducido[6];
            res += ',"d_p_activa_total":'+ traducido[7];
            res += ',"d_p_reactiva_F1":'+ traducido[8];
            res += ',"d_p_reactiva_F2":'+ traducido[9];
            res += ',"d_p_reactiva_F3":'+ traducido[10];
            res += ',"d_p_reactiva_total":'+ traducido[11];
            res += ',"d_p_aparente_F1":'+ traducido[12];
            res += ',"d_p_aparente_F2":'+ traducido[13];
            res += ',"d_p_aparente_F3":'+ traducido[14];
            res += ',"d_p_aparente_total":'+ traducido[15]+'}';
            return res;
        }
        //contadores
        if(address==460){
            traducido= powys3121.get_contadores(data);
            res += ',"contador_dig_1":'+ traducido[0];
            res += ',"contador_dig_2":'+ traducido[1];
            res += ',"contador_hora_recorrida":'+ traducido[2];
            res += ',"contador_hora":'+ traducido[3];
            res += ',"contador_interrupcion_potencia":'+ traducido[4];
        }
        //info de energia
        if(address==470){
            traducido= powys3121.get_energia(data);
            res += ',"energia_activa_importada_T1":'+traducido[0];
            res += ',"energia_activa_exportada_T1":'+traducido[1];
            res += ',"energia_reactiva_importada_T1":'+traducido[2];
            res += ',"energia_reactiva_exportada_T1":'+traducido[3];
            res += ',"energia_activa_importada_T2":'+traducido[4];
            res += ',"energia_activa_exportada_T2":'+traducido[5];
            res += ',"energia_reactiva_importada_T2":'+traducido[6];
            res += ',"energia_reactiva_exportada_T2":'+traducido[7];
            res += ',"energia_activa_importada_F1_T1":'+traducido[8];
            res += ',"energia_activa_exportada_F1_T1":'+traducido[9];
            res += ',"energia_reactiva_importada_F1_T1":'+traducido[10];
            res += ',"energia_reactiva_exportada_F1_T1":'+traducido[11];
            res += ',"energia_activa_importada_F2_T1":'+traducido[12];
            res += ',"energia_activa_exportada_F2_T1":'+traducido[13];
            res += ',"energia_reactiva_importada_F2_T1":'+traducido[14];
            res += ',"energia_reactiva_exportada_F2_T1":'+traducido[15];
            res += ',"energia_activa_importada_F3_T1":'+traducido[16];
            res += ',"energia_activa_exportada_F3_T1":'+traducido[17];
            res += ',"energia_reactiva_importada_F3_T1":'+traducido[18];
            res += ',"energia_reactiva_exportada_F3_T1":'+traducido[19];
            res += ',"energia_activa_importada_F1_T2":'+traducido[20];
            res += ',"energia_activa_exportada_F1_T2":'+traducido[21];
            res += ',"energia_reactiva_importada_F1_T2":'+traducido[22];
            res += ',"energia_reactiva_exportada_F1_T2":'+traducido[23];
            res += ',"energia_activa_importada_F2_T2":'+traducido[24];
            res += ',"energia_activa_exportada_F2_T2":'+traducido[25];
            res += ',"energia_reactiva_importada_F2_T2":'+traducido[26];
            res += ',"energia_reactiva_exportada_F2_T2":'+traducido[27];
            res += ',"energia_activa_importada_F3_T2":'+traducido[28];
            res += ',"energia_activa_exportada_F3_T2":'+traducido[29];
            res += ',"energia_reactiva_importada_F3_T2":'+traducido[30];
            res += ',"energia_reactiva_exportada_F3_T2":'+traducido[31]+'}';
            return res;
        }
        //get alarmas
        if(address==426){
            traducido= powys3121.get_alarmas(data);
            res += ',"alarma":'+ traducido[0]+'}';
            return res;
        }
    }
}

module.exports={tradDevice};