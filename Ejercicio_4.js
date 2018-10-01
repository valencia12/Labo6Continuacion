var a =[1,2,3,6,4,5,6];
function sumeextrem(arrg){
    var cant=Math.trunc(arrg.length/2);
    if(cant%2==0)
        for(let i =0;i<cant;i++){
            console.log(arrg[i]+arrg[arrg.lenght-i-1]);
    }
    else{
        for(let i =0;i<cant;i++){
            console.log(arrg[i]+arrg[arrg.length-i-1]);
        }
        console.log(arrg[cant]*2);
    }
}
sumeextrem(a);