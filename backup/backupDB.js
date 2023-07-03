const db=require('../Constantes/dbconst');
const mariadb = require('mariadb');

const pool=mariadb.createPool({
    host:   db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    connectionLimit: db.connectionLimit});

const crear_backup = async (data)=>{
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
          .then((rows) => {
       
            console.log(rows); //[ {val: 1}, meta: ... ]
            resolve(rows);
            
          })
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
      });
}

module.exports={crear_backup};