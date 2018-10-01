var a =["s",true,3,4,5];
function contype(array,tipo){
    let aux = [];
    array.forEach(e => {
        if(typeof e == tipo)
            aux.push(e);
    });
    return aux;
}