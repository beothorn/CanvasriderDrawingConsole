var xIncrement=10;

setLineScenery();
writeTextE("f(x)=x*^2*0.001");
setLineSolid();
plotE(function(x){return x*x*0.001;},500,xIncrement);

setLineScenery();
writeTextE("f(x)=sin(x/100)*100");
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
writeText("f(x)=sin(x/500)*100",edgeX,edgeY+100);
setLineSolid();
size = 500;
amplitude = 100;
plotE(function(x){return (Math.sin(x/size)*amplitude);},size*Math.PI,xIncrement);

setLineScenery();
writeTextE("f(x)=x^2*0.0001");
setLineSolid();
plotE(function(x){return x*x*0.0001;},1000,xIncrement);

setLineScenery();
writeTextE("f(x)=sin(x/100)*100");
setLineSolid();
var size = 2000;
var amplitude = 100;
plotE(function(x){return Math.sin(x/100)*amplitude;},size,xIncrement);

setLineScenery();
writeText("f(x)=(sin(x/500)*1000)*-1",edgeX,edgeY+100);
setLineSolid();
size = 500;
amplitude = 1000;
plotE(function(x){return (Math.sin(x/size)*amplitude)*-1;},size*Math.PI/2,xIncrement);

setLineScenery();
writeTextE("f(x)=x^2*0.001");
setLineSolid();
plotE(function(x){return x*x*0.001;},500,xIncrement);

setLineScenery();
writeText("f(x)=(sin(x/500)*1000)*-1",edgeX,edgeY+100);
setLineSolid();
size = 500;
amplitude = 1000;
plotE(function(x){return (Math.sin(x/size)*amplitude)*-1;},size*Math.PI/2,xIncrement);

setLineScenery();
writeTextE("f(x)=x*(x*0.001)");
setLineSolid();
plotE(function(x){return x*(x*0.001);},500,xIncrement);

setLineScenery();
writeText("f(x)=(sin(x/500)*1000)*-1",edgeX,edgeY+100);
setLineSolid();
size = 500;
amplitude = 1000;
plotE(function(x){return (Math.sin(x/size)*amplitude)*-1;},size*Math.PI/2,xIncrement);

setLineScenery();
writeTextE("f(x)=x^2*0.001");
setLineSolid();
plotE(function(x){return x*x*0.001;},500,xIncrement);

setLineScenery();
writeTextE("f(x)=0");
setLineSolid();
var constant = edgeY;
plotE(function(x){return 0;},2000,xIncrement);

setLineScenery();
writeTextE("f(x)=-x");
setLineSolid();
var constant = edgeY;
plotE(function(x){return -x;},2000,xIncrement);

setLineScenery();
writeText("f(x)=(sin(x/1000)*1000)*-1",edgeX,edgeY+100);
setLineSolid();
size = 1000;
amplitude = 1000;
plotE(function(x){return (Math.sin(x/size)*amplitude)*-1;},size*Math.PI/2,xIncrement);

setLineScenery();
writeTextE("f(x)=x^2*0.001");
setLineSolid();
plotE(function(x){return x*x*0.001;},500,xIncrement);

setLineScenery();
writeTextE("f(x)=x*x*0.001*-1");
setLineSolid();
plotE(function(x){return x*x*0.001*-1;},500,xIncrement);

setLineScenery();
writeTextE("f(x)=-x");
setLineSolid();
var constant = edgeY;
plotE(function(x){return -x;},2000,xIncrement);