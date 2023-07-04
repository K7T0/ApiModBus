const db=require('../Constantes/dbconst');
const mariadb = require('mariadb');

// var data={
//   id: 3,
//   modelo: 'powys3121',
//   fecha: '2023-07-03 14:50:17',
//   voltajeF1_N: 214.03199768066406,
//   voltajeF1_2: 368.947998046875,
//   corriente_F1: 11.484999656677246,
//   coseno_F1: 0.9900000095367432,
//   factor_potencia_F1: 0.965999960899353,
//   p_activa_F1: 2374.721923828125,
//   p_reactiva_F1: 339.9289855957031,
//   p_aparente_F1: 2458.1572265625,
//   THDV_F1: 2.809999942779541,
//   THDI_F1: 20.189998626708984,
//   voltajeF2_N: 212.48599243164062,
//   voltajeF2_3: 371.14898681640625,
//   corriente_F2: 15,
//   coseno_F2: 0.9839999675750732,
//   factor_potencia_F2: 0.9729999899864197,
//   p_activa_F2: 3102.3720703125,
//   p_reactiva_F2: 566.2760009765625,
//   p_aparente_F2: 3187.289794921875,
//   THDV_F2: 3.0899999141693115,
//   THDI_F2: 11.899999618530273,
//   voltajeF3_N: 214.67498779296875,
//   voltajeF3_1: 369.77801513671875,
//   corriente_F3: 12.89799976348877,
//   coseno_F3: 0.9850000143051147,
//   factor_potencia_F3: 0.9639999866485596,
//   p_activa_F3: 2670.130859375,
//   p_reactiva_F3: 460.5999755859375,
//   p_aparente_F3: 2768.8779296875,
//   THDV_F3: 3.2799999713897705,
//   THDI_F3: 18.770000457763672,
//   voltaje_l_n: 213.60000610351562,
//   voltaje_l_l: 369.9580078125,
//   corriente_total: 44.770999908447266,
//   fpotencia_sis: 0.9729999899864197,
//   p_activa_total: 9292.888671875,
//   p_reactiva_total: 1467.22900390625,
//   p_aparente_total: 9552.5205078125,
//   frecuencia_sistema: 50.040000915527344
// };

const pool=mariadb.createPool({
    host:   db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    connectionLimit: db.connectionLimit});

const crear_backup = async (data)=>{
    return new Promise((resolve, reject) => {
    pool.getConnection()
      .then(conn => {
      
        conn.query("INSERT INTO datos_3121 (fecha,V1,V2,V3,V1_2,V2_3,V1_3,C1,C2,C3,Pa1,Pa2,Pa3,Pr1,Pr2,Pr3,Papa1,Papa2,Papa3,Frec_sis,consumo,Vp_LN,Vp_LL,C_total,Pac_total,Pr_total,Papa_total,Fp_sis,error,id_error,Serial) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
        [data.fecha,data.voltajeF1_N,data.voltajeF2_N,data.voltajeF3_N,
            data.voltajeF1_2,data.voltajeF2_3,data.voltajeF3_1,
            data.corriente_F1,data.corriente_F2,data.corriente_F3,
            data.p_activa_F1,data.p_activa_F2,data.p_activa_F3,
            data.p_reactiva_F1,data.p_reactiva_F2,data.p_reactiva_F3,
            data.p_aparente_F1,data.p_aparente_F2,data.p_aparente_F3,
            data.frecuencia_sistema,null,data.voltaje_l_n,data.voltaje_l_l,data.corriente_total,
            data.p_activa_total,data.p_reactiva_total,data.p_aparente_total,data.fpotencia_sis,null,null,data.id])
          .then((res) => {
            console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
            conn.end();
          })
          .catch(err => {
            //handle error
            console.log(err); 
            conn.end();
          })
          
      }).catch(err => {
        //not connected
        console.log('error en conexión: ',err);
      });
    });
}

module.exports={crear_backup};