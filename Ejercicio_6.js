var m = ["m","u","r","c","i","e","l","a","g","o"];
var n = [0,1,2,3,4,5,6,7,8,9];
var s = "mama";
function claveM(strin){
    var nueva='';
    for (let i of strin) {
        for(let j=0;j<m.length;j++){
            if(i==m[j]){
                nueva= nueva + n[j];
            }
            else if (i==n[j]){
                nueva= nueva + m[j];
            }
        }
    }
    return nueva;
}