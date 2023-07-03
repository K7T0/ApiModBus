const fs = require('fs');

const consulta_datas = (gateway) =>{

    return new Promise((resolve, reject) =>{
      
      fs.readFile(`data_${gateway}.json`, 'utf-8', (err, data) => {
        if(err) {
          console.log('error: ', err);
        } else {
          var consulta_json = JSON.parse(data);
          //console.log(consulta_json);
          resolve(consulta_json);
  
        }
      });
    });
  };

module.exports = {consulta_datas};
  