function fechahora (){
    const ahora= new Date();

    const año= ahora.getFullYear();
    const mes= String(ahora.getMonth()+1).padStart(2, '0');
    const dia= String(ahora.getDate()).padStart(2, '0');

    const hora= String(ahora.getHours()).padStart(2, '0');
    const min = String(ahora.getMinutes()).padStart(2, '0');
    const sec= String(ahora.getSeconds()).padStart(2, '0');

    const fechahora= `${año}-${mes}-${dia} ${hora}:${min}:${sec}`
    return fechahora;
}

module.exports ={fechahora}