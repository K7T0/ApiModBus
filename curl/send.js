const cmd = require('node-cmd');

const curl = async (request)=>{
    // console.log('request: ', request);
    return new Promise((resolve, reject)=>{
        const command= cmd.run(request, (err, data, stderr)=>{
            if(err){
                console.log('error: ', err);
                resolve(err);
            }
            else{
                console.log('data: ', data);
                resolve(data);
            }
        });
    });
}

module.exports = {curl};