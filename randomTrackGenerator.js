writeText("Randomly generated track",-2,-365);
for(var i=0;i<20;i++){
    var randSize = Math.floor((Math.random()*1000)+300);
    var depth = randSize / Math.floor((Math.random()*8)+2);
    if(i%2==0){
        addBelzierE(edgeX+depth,edgeY-depth,edgeX+randSize,edgeY,edgeX+randSize-depth,edgeY-depth);
    }else{
        addBelzierE(edgeX+depth,edgeY+depth,edgeX+randSize,edgeY,edgeX+randSize-depth,edgeY+depth);
    }
}

