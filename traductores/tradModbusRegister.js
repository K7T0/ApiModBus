const tradModbusRegister = (LSB,MSB, tipo) =>{
  // paso valores json a string 
  const valor_v1 = LSB
  var valor_v1_S = JSON.stringify(valor_v1)

  var posicion_ini = valor_v1_S.indexOf('[')+1
  var posicion_fin = valor_v1_S.indexOf(']')

  // division de sibstring 
  var extraida = valor_v1_S.substring(posicion_ini, posicion_fin)

  var coma_pos = extraida.indexOf(",")

  var vol1_p1 = extraida.substring(0,coma_pos)
  var vol1_p2 = extraida.substring(coma_pos+1)


  const valor_v2 = MSB
  var valor_v2_S = JSON.stringify(valor_v2)

  posicion_ini = valor_v2_S.indexOf('[')+1
  posicion_fin = valor_v2_S.indexOf(']')

  // division de sibstring 
  var extraida = valor_v2_S.substring(posicion_ini, posicion_fin)
  
  var coma_pos = extraida.indexOf(",")

  var vol1_p3 = extraida.substring(0,coma_pos)
  var vol1_p4 = extraida.substring(coma_pos+1)

  //conversion de valores a hexadecimal 
  var v1p1_I = parseInt(vol1_p1)
  var v1p2_I = parseInt(vol1_p2)
  var v1p3_I = parseInt(vol1_p3)
  var v1p4_I = parseInt(vol1_p4)

  var vip1_H = v1p1_I.toString(16)
  var vip2_H = v1p2_I.toString(16)
  var vip3_H = v1p3_I.toString(16)
  var vip4_H = v1p4_I.toString(16)

  if (vip1_H.length == 1){vip1_H = "0" + vip1_H}
  if (vip2_H.length == 1){vip2_H = "0" + vip2_H}
  if (vip3_H.length == 1){vip3_H = "0" + vip3_H}
  if (vip4_H.length == 1){vip4_H = "0" + vip4_H}

  var conv_f = vip1_H+vip2_H+vip3_H+vip4_H
  var buf = new Buffer.from(conv_f, "hex")

  if(tipo == "int32"){

    var number = buf.readUInt32BE(0)
    return number;

  }else if (tipo == "float"){

    var number = buf.readFloatBE(0)
    return number;

  }
}

module.exports={tradModbusRegister}