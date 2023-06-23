const reg = require('../tradModbusRegister');

const get_basica= (data)=>{
    var res=[];
    //Mediciones Basicas Fase-1
    var v_F1N= reg.tradModbusRegister(data[0], data[1],'float');
    var v_F12= reg.tradModbusRegister(data[2], data[3],'float');
    var c_F1= reg.tradModbusRegister(data[4], data[5],'float');
    var cos_F1= reg.tradModbusRegister(data[6], data[7],'float');
    var fp_F1= reg.tradModbusRegister(data[8], data[9],'float');
    var p_activa_F1= reg.tradModbusRegister(data[10], data[11],'float');
    var p_reactiva_F1= reg.tradModbusRegister(data[12], data[13],'float');
    var p_aparente_F1= reg.tradModbusRegister(data[14], data[15],'float');
    var THDV_F1= reg.tradModbusRegister(data[16], data[17],'float');
    var THDI_F1= reg.tradModbusRegister(data[18], data[19],'float');
    res.push(v_F1N, v_F12, c_F1, cos_F1, fp_F1, p_activa_F1, p_reactiva_F1, p_aparente_F1, THDV_F1, THDI_F1);
    //Mediciones Basicas Fase-2
    var v_F2N= reg.tradModbusRegister(data[20], data[21],'float');
    var v_F23= reg.tradModbusRegister(data[22], data[23],'float');
    var c_F2= reg.tradModbusRegister(data[24], data[25],'float');
    var cos_F2= reg.tradModbusRegister(data[26], data[27],'float');
    var fp_F2= reg.tradModbusRegister(data[28], data[29],'float');
    var p_activa_F2= reg.tradModbusRegister(data[30], data[31],'float');
    var p_reactiva_F2= reg.tradModbusRegister(data[32], data[33],'float');
    var p_aparente_F2= reg.tradModbusRegister(data[34], data[35],'float');
    var THDV_F2= reg.tradModbusRegister(data[36], data[37],'float');
    var THDI_F2= reg.tradModbusRegister(data[38], data[39],'float');
    res.push(v_F2N, v_F23, c_F2, cos_F2, fp_F2, p_activa_F2, p_reactiva_F2, p_aparente_F2, THDV_F2, THDI_F2);
    //Mediciones Basicas Fase-3
    var v_F3N= reg.tradModbusRegister(data[40], data[41],'float');
    var v_F31= reg.tradModbusRegister(data[42], data[43],'float');
    var c_F3= reg.tradModbusRegister(data[44], data[45],'float');
    var cos_F3= reg.tradModbusRegister(data[46], data[47],'float');
    var fp_F3= reg.tradModbusRegister(data[48], data[49],'float');
    var p_activa_F3= reg.tradModbusRegister(data[50], data[51],'float');
    var p_reactiva_F3= reg.tradModbusRegister(data[52], data[53],'float');
    var p_aparente_F3= reg.tradModbusRegister(data[54], data[55],'float');
    var THDV_F3= reg.tradModbusRegister(data[56], data[57],'float');
    var THDI_F3= reg.tradModbusRegister(data[58], data[59],'float');
    res.push(v_F3N, v_F31, c_F3, cos_F3, fp_F3, p_activa_F3, p_reactiva_F3, p_aparente_F3, THDV_F3, THDI_F3);
    //Mediciones Comunes Fase-1 Fase-2 Fase-3
    var v_LNprom= reg.tradModbusRegister(data[60], data[61],'float');
    var v_LLprom= reg.tradModbusRegister(data[62], data[63],'float');
    var c_total= reg.tradModbusRegister(data[64], data[65],'float');
    var fp_sistema= reg.tradModbusRegister(data[66], data[67],'float');
    var p_activa_total= reg.tradModbusRegister(data[68], data[69],'float');
    var p_reactiva_total= reg.tradModbusRegister(data[70], data[71],'float');
    var p_aparente_total= reg.tradModbusRegister(data[72], data[73],'float');
    var frecuencia_sistema = reg.tradModbusRegister(data[74], data[75],'float');
    var c_neutro= reg.tradModbusRegister(data[76], data[77],'float');
    res.push(v_LNprom, v_LLprom, c_total, fp_sistema, p_activa_total, p_reactiva_total, p_aparente_total, frecuencia_sistema, c_neutro);
    return res;
}

const get_F1_A= (data)=>{//address 78
    var res=[];
    //Armonicos Voltaje Fase-1
    var F1_AV1= reg.tradModbusRegister(data[0], data[1],'float');
    var F1_AV3= reg.tradModbusRegister(data[2], data[3],'float');
    var F1_AV5= reg.tradModbusRegister(data[4], data[5],'float');
    var F1_AV7= reg.tradModbusRegister(data[6], data[7],'float');
    var F1_AV9= reg.tradModbusRegister(data[8], data[9],'float');
    var F1_AV11= reg.tradModbusRegister(data[10], data[11],'float');
    var F1_AV13= reg.tradModbusRegister(data[12], data[13],'float');
    var F1_AV15= reg.tradModbusRegister(data[14], data[15],'float');
    var F1_AV17= reg.tradModbusRegister(data[16], data[17],'float');
    var F1_AV19= reg.tradModbusRegister(data[18], data[19],'float');
    var F1_AV21= reg.tradModbusRegister(data[20], data[21],'float');
    var F1_AV23= reg.tradModbusRegister(data[22], data[23],'float');
    var F1_AV25= reg.tradModbusRegister(data[24], data[25],'float');
    var F1_AV27= reg.tradModbusRegister(data[26], data[27],'float');
    var F1_AV29= reg.tradModbusRegister(data[28], data[29],'float');
    var F1_AV31= reg.tradModbusRegister(data[30], data[31],'float');
    res.push(F1_AV1, F1_AV3, F1_AV5, F1_AV7, F1_AV9, F1_AV11, F1_AV13, F1_AV15, F1_AV17, F1_AV19, F1_AV21, F1_AV23, F1_AV25, F1_AV27, F1_AV29, F1_AV31)
    //Armonicos Corriente Fase-1
    var F1_AC1 = reg.tradModbusRegister(data[32], data[33],'float');
    var F1_AC3 = reg.tradModbusRegister(data[34], data[35],'float');
    var F1_AC5 = reg.tradModbusRegister(data[36], data[37],'float');
    var F1_AC7 = reg.tradModbusRegister(data[38], data[39],'float');
    var F1_AC9 = reg.tradModbusRegister(data[40], data[41],'float');
    var F1_AC11 = reg.tradModbusRegister(data[42], data[43],'float');
    var F1_AC13 = reg.tradModbusRegister(data[44], data[45],'float');
    var F1_AC15 = reg.tradModbusRegister(data[46], data[47],'float');
    var F1_AC17 = reg.tradModbusRegister(data[48], data[49],'float');
    var F1_AC19 = reg.tradModbusRegister(data[50], data[51],'float');
    var F1_AC21 = reg.tradModbusRegister(data[52], data[53],'float');
    var F1_AC23 = reg.tradModbusRegister(data[54], data[55],'float');
    var F1_AC25 = reg.tradModbusRegister(data[56], data[57],'float');
    var F1_AC27 = reg.tradModbusRegister(data[58], data[59],'float');
    var F1_AC29 = reg.tradModbusRegister(data[60], data[61],'float');
    var F1_AC31 = reg.tradModbusRegister(data[62], data[63],'float');
    res.push(F1_AC1, F1_AC3, F1_AC5, F1_AC7, F1_AC9, F1_AC11, F1_AC13, F1_AC15, F1_AC17, F1_AC19, F1_AC21, F1_AC23, F1_AC25, F1_AC27, F1_AC29, F1_AC31)

    return res;
}

const get_F2_A= (data)=>{ //address= 142
    var res=[];
    //Armonicos Voltaje Fase-2
    var F2_AV1= reg.tradModbusRegister(data[0], data[1],'float');
    var F2_AV3= reg.tradModbusRegister(data[2], data[3],'float');
    var F2_AV5= reg.tradModbusRegister(data[4], data[5],'float');
    var F2_AV7= reg.tradModbusRegister(data[6], data[7],'float');
    var F2_AV9= reg.tradModbusRegister(data[8], data[9],'float');
    var F2_AV11= reg.tradModbusRegister(data[10], data[11],'float');
    var F2_AV13= reg.tradModbusRegister(data[12], data[13],'float');
    var F2_AV15= reg.tradModbusRegister(data[14], data[15],'float');
    var F2_AV17= reg.tradModbusRegister(data[16], data[17],'float');
    var F2_AV19= reg.tradModbusRegister(data[18], data[19],'float');
    var F2_AV21= reg.tradModbusRegister(data[20], data[21],'float');
    var F2_AV23= reg.tradModbusRegister(data[22], data[23],'float');
    var F2_AV25= reg.tradModbusRegister(data[24], data[25],'float');
    var F2_AV27= reg.tradModbusRegister(data[26], data[27],'float');
    var F2_AV29= reg.tradModbusRegister(data[28], data[29],'float');
    var F2_AV31= reg.tradModbusRegister(data[30], data[31],'float');
    res.push(F2_AV1, F2_AV3, F2_AV5, F2_AV7, F2_AV9, F2_AV11, F2_AV13, F2_AV15, F2_AV17, F2_AV19, F2_AV21, F2_AV23, F2_AV25, F2_AV27, F2_AV29, F2_AV31)
    //Armonicos Corriente Fase-2
    var F2_AC1 = reg.tradModbusRegister(data[32], data[33],'float');
    var F2_AC3 = reg.tradModbusRegister(data[34], data[35],'float');
    var F2_AC5 = reg.tradModbusRegister(data[36], data[37],'float');
    var F2_AC7 = reg.tradModbusRegister(data[38], data[39],'float');
    var F2_AC9 = reg.tradModbusRegister(data[40], data[41],'float');
    var F2_AC11 = reg.tradModbusRegister(data[42], data[43],'float');
    var F2_AC13 = reg.tradModbusRegister(data[44], data[45],'float');
    var F2_AC15 = reg.tradModbusRegister(data[46], data[47],'float');
    var F2_AC17 = reg.tradModbusRegister(data[48], data[49],'float');
    var F2_AC19 = reg.tradModbusRegister(data[50], data[51],'float');
    var F2_AC21 = reg.tradModbusRegister(data[52], data[53],'float');
    var F2_AC23 = reg.tradModbusRegister(data[54], data[55],'float');
    var F2_AC25 = reg.tradModbusRegister(data[56], data[57],'float');
    var F2_AC27 = reg.tradModbusRegister(data[58], data[59],'float');
    var F2_AC29 = reg.tradModbusRegister(data[60], data[61],'float');
    var F2_AC31 = reg.tradModbusRegister(data[62], data[63],'float');
    res.push(F2_AC1, F2_AC3, F2_AC5, F2_AC7, F2_AC9, F2_AC11, F2_AC13, F2_AC15, F2_AC17, F2_AC19, F2_AC21, F2_AC23, F2_AC25, F2_AC27, F2_AC29, F2_AC31)

    return res;
}

const get_F3_A= (data)=>{ //address= 206
    var res=[];
    //Armonicos Voltaje Fase-3
    var F3_AV1= reg.tradModbusRegister(data[0], data[1],'float');
    var F3_AV3= reg.tradModbusRegister(data[2], data[3],'float');
    var F3_AV5= reg.tradModbusRegister(data[4], data[5],'float');
    var F3_AV7= reg.tradModbusRegister(data[6], data[7],'float');
    var F3_AV9= reg.tradModbusRegister(data[8], data[9],'float');
    var F3_AV11= reg.tradModbusRegister(data[10], data[11],'float');
    var F3_AV13= reg.tradModbusRegister(data[12], data[13],'float');
    var F3_AV15= reg.tradModbusRegister(data[14], data[15],'float');
    var F3_AV17= reg.tradModbusRegister(data[16], data[17],'float');
    var F3_AV19= reg.tradModbusRegister(data[18], data[19],'float');
    var F3_AV21= reg.tradModbusRegister(data[20], data[21],'float');
    var F3_AV23= reg.tradModbusRegister(data[22], data[23],'float');
    var F3_AV25= reg.tradModbusRegister(data[24], data[25],'float');
    var F3_AV27= reg.tradModbusRegister(data[26], data[27],'float');
    var F3_AV29= reg.tradModbusRegister(data[28], data[29],'float');
    var F3_AV31= reg.tradModbusRegister(data[30], data[31],'float');
    res.push(F3_AV1, F3_AV3, F3_AV5, F3_AV7, F3_AV9, F3_AV11, F3_AV13, F3_AV15, F3_AV17, F3_AV19, F3_AV21, F3_AV23, F3_AV25, F3_AV27, F3_AV29, F3_AV31)
    //Armonicos Corriente Fase-3
    var F3_AC1 = reg.tradModbusRegister(data[32], data[33],'float');
    var F3_AC3 = reg.tradModbusRegister(data[34], data[35],'float');
    var F3_AC5 = reg.tradModbusRegister(data[36], data[37],'float');
    var F3_AC7 = reg.tradModbusRegister(data[38], data[39],'float');
    var F3_AC9 = reg.tradModbusRegister(data[40], data[41],'float');
    var F3_AC11 = reg.tradModbusRegister(data[42], data[43],'float');
    var F3_AC13 = reg.tradModbusRegister(data[44], data[45],'float');
    var F3_AC15 = reg.tradModbusRegister(data[46], data[47],'float');
    var F3_AC17 = reg.tradModbusRegister(data[48], data[49],'float');
    var F3_AC19 = reg.tradModbusRegister(data[50], data[51],'float');
    var F3_AC21 = reg.tradModbusRegister(data[52], data[53],'float');
    var F3_AC23 = reg.tradModbusRegister(data[54], data[55],'float');
    var F3_AC25 = reg.tradModbusRegister(data[56], data[57],'float');
    var F3_AC27 = reg.tradModbusRegister(data[58], data[59],'float');
    var F3_AC29 = reg.tradModbusRegister(data[60], data[61],'float');
    var F3_AC31 = reg.tradModbusRegister(data[62], data[63],'float');
    res.push(F3_AC1, F3_AC3, F3_AC5, F3_AC7, F3_AC9, F3_AC11, F3_AC13, F3_AC15, F3_AC17, F3_AC19, F3_AC21, F3_AC23, F3_AC25, F3_AC27, F3_AC29, F3_AC31)

    return res;
}

const get_Max= (data)=>{ //address= 270
    var res=[];
    //Fase 1
    var Vmax_F1N= reg.tradModbusRegister(data[0], data[1],'float');
    var Vmax_F1L= reg.tradModbusRegister(data[2], data[3],'float');
    var Imax_F1= reg.tradModbusRegister(data[4], data[5],'float');
    var cosmax_F1= reg.tradModbusRegister(data[6], data[7],'float');
    var fpMax_F1= reg.tradModbusRegister(data[8], data[9],'float');
    var p_activa_max_F1= reg.tradModbusRegister(data[10], data[11],'float');
    var p_reactiva_max_F1= reg.tradModbusRegister(data[12], data[13],'float');
    var p_aparente_max_F1= reg.tradModbusRegister(data[14], data[15],'float');
    var THD_Vmax_F1= reg.tradModbusRegister(data[16], data[17],'float');  
    var THD_Imax_F1= reg.tradModbusRegister(data[18], data[19],'float');
    res.push(Vmax_F1N, Vmax_F1L, Imax_F1, cosmax_F1, fpMax_F1, p_activa_max_F1, p_reactiva_max_F1, p_aparente_max_F1, THD_Vmax_F1, THD_Imax_F1)
    //Fase 2
    var Vmax_F2N= reg.tradModbusRegister(data[20], data[21],'float');
    var Vmax_F2L= reg.tradModbusRegister(data[22], data[23],'float');
    var Imax_F2= reg.tradModbusRegister(data[24], data[25],'float');
    var cosmax_F2= reg.tradModbusRegister(data[26], data[27],'float');
    var fpMax_F2= reg.tradModbusRegister(data[28], data[29],'float');
    var p_activa_max_F2= reg.tradModbusRegister(data[30], data[31],'float');
    var p_reactiva_max_F2= reg.tradModbusRegister(data[32], data[33],'float');
    var p_aparente_max_F2= reg.tradModbusRegister(data[34], data[35],'float');
    var THD_Vmax_F2= reg.tradModbusRegister(data[36], data[37],'float');
    var THD_Imax_F2= reg.tradModbusRegister(data[38], data[39],'float');
    res.push(Vmax_F2N, Vmax_F2L, Imax_F2, cosmax_F2, fpMax_F2, p_activa_max_F2, p_reactiva_max_F2, p_aparente_max_F2, THD_Vmax_F2, THD_Imax_F2)
    //Fase 3
    var Vmax_F3N= reg.tradModbusRegister(data[40], data[41],'float');
    var Vmax_F3L= reg.tradModbusRegister(data[42], data[43],'float');
    var Imax_F3= reg.tradModbusRegister(data[44], data[45],'float');
    var cosmax_F3= reg.tradModbusRegister(data[46], data[47],'float');
    var fpMax_F3= reg.tradModbusRegister(data[48], data[49],'float');
    var p_activa_max_F3= reg.tradModbusRegister(data[50], data[51],'float');
    var p_reactiva_max_F3= reg.tradModbusRegister(data[52], data[53],'float');
    var p_aparente_max_F3= reg.tradModbusRegister(data[54], data[55],'float');
    var THD_Vmax_F3= reg.tradModbusRegister(data[56], data[57],'float');
    var THD_Imax_F3= reg.tradModbusRegister(data[58], data[59],'float');
    res.push(Vmax_F3N, Vmax_F3L, Imax_F3, cosmax_F3, fpMax_F3, p_activa_max_F3, p_reactiva_max_F3, p_aparente_max_F3, THD_Vmax_F3, THD_Imax_F3)
    //maximos promedio 
    var Vmax_prom_LN= reg.tradModbusRegister(data[60], data[61],'float');
    var Vmax_prom_LL= reg.tradModbusRegister(data[62], data[63],'float');
    var Imax_total= reg.tradModbusRegister(data[64], data[65],'float');
    var fpmax_sistema = reg.tradModbusRegister(data[66], data[67],'float');
    var p_activamax_total= reg.tradModbusRegister(data[68], data[69],'float');
    var p_reactivamax_total= reg.tradModbusRegister(data[70], data[71],'float');
    var p_aparentemax_total= reg.tradModbusRegister(data[72], data[73],'float');
    var f_max_sistema= reg.tradModbusRegister(data[74], data[75],'float');
    var I_neutro_max= reg.tradModbusRegister(data[76], data[77],'float');
    res.push(Vmax_prom_LN, Vmax_prom_LL, Imax_total, fpmax_sistema, p_activamax_total, p_reactivamax_total, p_aparentemax_total, f_max_sistema, I_neutro_max)

    return res;
}

const get_Min= (data)=>{ //address= 348
    var res=[];
    //Fase 1
    var Vmin_F1N= reg.tradModbusRegister(data[0], data[1],'float');
    var Vmin_F1L= reg.tradModbusRegister(data[2], data[3],'float');
    var Imin_F1= reg.tradModbusRegister(data[4], data[5],'float');
    var cosmin_F1= reg.tradModbusRegister(data[6], data[7],'float');
    var fpmin_F1= reg.tradModbusRegister(data[8], data[9],'float');
    var p_activa_min_F1= reg.tradModbusRegister(data[10], data[11],'float');
    var p_reactiva_min_F1= reg.tradModbusRegister(data[12], data[13],'float');
    var p_aparente_min_F1= reg.tradModbusRegister(data[14], data[15],'float');
    var THD_Vmin_F1= reg.tradModbusRegister(data[16], data[17],'float');
    var THD_Imin_F1= reg.tradModbusRegister(data[18], data[19],'float');
    res.push(Vmin_F1N, Vmin_F1L, Imin_F1, cosmin_F1, fpmin_F1, p_activa_min_F1, p_reactiva_min_F1, p_aparente_min_F1, THD_Vmin_F1, THD_Imin_F1)
    //Fase 2
    var Vmin_F2N= reg.tradModbusRegister(data[20], data[21],'float');
    var Vmin_F2L= reg.tradModbusRegister(data[22], data[23],'float');
    var Imin_F2= reg.tradModbusRegister(data[24], data[25],'float');
    var cosmin_F2= reg.tradModbusRegister(data[26], data[27],'float');
    var fpmin_F2= reg.tradModbusRegister(data[28], data[29],'float');
    var p_activa_min_F2= reg.tradModbusRegister(data[30], data[31],'float');
    var p_reactiva_min_F2= reg.tradModbusRegister(data[32], data[33],'float');
    var p_aparente_min_F2= reg.tradModbusRegister(data[34], data[35],'float');
    var THD_Vmin_F2= reg.tradModbusRegister(data[36], data[37],'float');
    var THD_Imin_F2= reg.tradModbusRegister(data[38], data[39],'float');
    res.push(Vmin_F2N, Vmin_F2L, Imin_F2, cosmin_F2, fpmin_F2, p_activa_min_F2, p_reactiva_min_F2, p_aparente_min_F2, THD_Vmin_F2, THD_Imin_F2)
    //Fase 3
    var Vmin_F3N= reg.tradModbusRegister(data[40], data[41],'float');
    var Vmin_F3L= reg.tradModbusRegister(data[42], data[43],'float');
    var Imin_F3= reg.tradModbusRegister(data[44], data[45],'float');
    var cosmin_F3= reg.tradModbusRegister(data[46], data[47],'float');
    var fpmin_F3= reg.tradModbusRegister(data[48], data[49],'float');
    var p_activa_min_F3= reg.tradModbusRegister(data[50], data[51],'float');
    var p_reactiva_min_F3= reg.tradModbusRegister(data[52], data[53],'float');
    var p_aparente_min_F3= reg.tradModbusRegister(data[54], data[55],'float');
    var THD_Vmin_F3= reg.tradModbusRegister(data[56], data[57],'float');
    var THD_Imin_F3= reg.tradModbusRegister(data[58], data[59],'float');
    res.push(Vmin_F3N, Vmin_F3L, Imin_F3, cosmin_F3, fpmin_F3, p_activa_min_F3, p_reactiva_min_F3, p_aparente_min_F3, THD_Vmin_F3, THD_Imin_F3)
    //minimos promedio
    var Vmin_prom_LN= reg.tradModbusRegister(data[60], data[61],'float');
    var Vmin_prom_LL= reg.tradModbusRegister(data[62], data[63],'float');
    var Imin_total= reg.tradModbusRegister(data[64], data[65],'float');
    var fpmin_sistema = reg.tradModbusRegister(data[66], data[67],'float');
    var p_activamin_total= reg.tradModbusRegister(data[68], data[69],'float');
    var p_reactivamin_total= reg.tradModbusRegister(data[70], data[71],'float');
    var p_aparentemin_total= reg.tradModbusRegister(data[72], data[73],'float');
    var f_min_sistema= reg.tradModbusRegister(data[74], data[75],'float');
    var I_neutro_min= reg.tradModbusRegister(data[76], data[77],'float');
    res.push(Vmin_prom_LN, Vmin_prom_LL, Imin_total, fpmin_sistema, p_activamin_total, p_reactivamin_total, p_aparentemin_total, f_min_sistema, I_neutro_min)

    return res;
}


const get_demanda=(data)=>{ //address 428
    var res = [];
    var d_iF1= reg.tradModbusRegister(data[0], data[1],'float');
    var d_iF2= reg.tradModbusRegister(data[2], data[3],'float');
    var d_iF3= reg.tradModbusRegister(data[4], data[5],'float');
    var d_i_total= reg.tradModbusRegister(data[6], data[7],'float');
    var d_p_activa_F1= reg.tradModbusRegister(data[8], data[9],'float');
    var d_p_activa_F2= reg.tradModbusRegister(data[10], data[11],'float');
    var d_p_activa_F3= reg.tradModbusRegister(data[12], data[13],'float');
    var d_p_activa_total= reg.tradModbusRegister(data[14], data[15],'float');
    var d_p_reactiva_F1= reg.tradModbusRegister(data[16], data[17],'float');
    var d_p_reactiva_F2= reg.tradModbusRegister(data[18], data[19],'float');
    var d_p_reactiva_F3= reg.tradModbusRegister(data[20], data[21],'float');
    var d_p_reactiva_total= reg.tradModbusRegister(data[22], data[23],'float');
    var d_p_aparente_F1= reg.tradModbusRegister(data[24], data[25],'float');
    var d_p_aparente_F2= reg.tradModbusRegister(data[26], data[27],'float');
    var d_p_aparente_F3= reg.tradModbusRegister(data[28], data[29],'float');
    var d_p_aparente_total= reg.tradModbusRegister(data[30], data[31],'float');
    res.push(d_iF1, d_iF2, d_iF3, d_i_total, d_p_activa_F1, d_p_activa_F2, d_p_activa_F3, d_p_activa_total, d_p_reactiva_F1, d_p_reactiva_F2, d_p_reactiva_F3, d_p_reactiva_total, d_p_aparente_F1, d_p_aparente_F2, d_p_aparente_F3, d_p_aparente_total)

    return res;
}


module.exports={get_basica, get_Min, get_Max, get_F1_A, get_F2_A, get_F3_A};