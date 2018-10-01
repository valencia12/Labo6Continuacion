var a=[1,2,3,4,4,4,5,5,5,6,6,7,7];
function ocurrencias(array,n){
    var cont=0;
    array.forEach(e => {
        if(e==n)
            cont++;
    });
    return cont;
}
ocurrencias(a,5);
