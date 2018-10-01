function random(n){
    var lista=[];
    for(let i=0;i<20;i++){
        lista.push(Math.floor(Math.random()*101));
    }
    
    if(lista.includes(n))
        return "yey adivinaste " + n;
   
    else 
        return "no loco";
}