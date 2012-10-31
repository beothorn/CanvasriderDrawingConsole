var xIncrement=10;

setLineScenery();
writeTextE("f(x)=x*(x*0.001)");
setLineSolid();
plotE(function(x){return x*(x*0.001);},500,xIncrement);

setLineScenery();
writeTextE("f(x)=sin(x/500)*80");
setLineSolid();
var size = 100;
var amplitude = 100;
plotE(function(x){return Math.sin(x/size)*amplitude;},size*Math.PI,xIncrement);

setLineScenery();
writeText("f(x)=(sin(x/500)*500)*-1",edgeX,edgeY+100);
setLineSolid();
size = 500;
amplitude = 500;
plotE(function(x){return (Math.sin(x/size)*amplitude)*-1;},size*Math.PI,xIncrement);

setLineScenery();
writeText("f(x)=(sin(x/500)*500)*-1",edgeX,edgeY+100);
setLineSolid();
size = 500;
amplitude = 500;
plotE(function(x){return (Math.sin(x/size)*amplitude)*-1;},size*Math.PI,xIncrement);