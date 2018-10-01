
var a=[1,2,3,4,5,6,7,8,9]
function s_prom(array){
    var sum=0;
    array.forEach(e => {
        sum += e;
    });
    return sum/(array.length);
}
s_prom(a);