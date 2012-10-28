var wheelSize = 30;
addLine(-40,edgeY-wheelSize,edgeX,edgeY-wheelSize);
resetEdge();

function sineWave(frequency,amplitude,size){
  var startingX = edgeX;
  var startingY = edgeY;
  edgeY = startingY - wheelSize;
  var sineWaveCenter = edgeY;
  for(var i=0; i<size;i++){
    addLineE(edgeX+10,sineWaveCenter+(Math.sin(i/frequency)*amplitude));
  }
  edgeX = startingX;
  edgeY = startingY;
  sineWaveCenter = edgeY;
  for(var i=0; i<size;i++){
    addLineE(edgeX+10,sineWaveCenter+(Math.sin(i/frequency)*amplitude));
  }
}

function bezierCurve(xStart,yStart,xEnd,yEnd,height){
  addBelzier(xStart,yStart,xStart+height,yStart,xEnd,yEnd,xEnd+height,yEnd);
}

function bezierConstrainedCurveUp(height){
  var beforeY;
  if(height>0){
    edgeY -= height+2*wheelSize;
    beforeY = edgeY - wheelSize;
  }else{
    edgeY += height+2*wheelSize;
    beforeY = edgeY + 3*wheelSize;
  }
  bezierConstrainedCurveDown(height);
  edgeY = beforeY;
}

function bezierConstrainedCurveDown(height){
  var beforeX = edgeX;
  var beforeY = edgeY;
  
  if(height>0){
    bezierCurve(edgeX,edgeY-wheelSize,edgeX,edgeY+height-wheelSize,height);
    var restoreX = edgeX;
    var restoreY = edgeY;
    bezierCurve(beforeX,beforeY,beforeX,beforeY+height-2*wheelSize,height-wheelSize);
    edgeX = restoreX;
    edgeY = restoreY;
  }else{
    bezierCurve(edgeX,edgeY-wheelSize,edgeX,edgeY-height-wheelSize,height);
    var restoreX = edgeX;
    var restoreY = edgeY;
    bezierCurve(beforeX,beforeY,beforeX,beforeY-height-2*wheelSize,height+wheelSize);
    edgeX = restoreX;
    edgeY = restoreY;
  }
}

function addConstrainedLine(x,y){
  var oldEdgeY = edgeY;
  var oldEdgeX = edgeX;
  addLineE(x,y);
  edgeY = oldEdgeY-wheelSize;
  edgeX = oldEdgeX;
  addLineE(x,y-wheelSize);
}


addConstrainedLine(edgeX+1000,edgeY);
edgeY+=wheelSize;

sineWave(50,200,500);
sineWave(25,200,500);

bezierConstrainedCurveDown(600);
bezierConstrainedCurveDown(-700);
bezierConstrainedCurveDown(800);
bezierConstrainedCurveDown(-1000);

sineWave(50,200,250);
sineWave(10,80,250);

bezierConstrainedCurveDown(1000);
bezierConstrainedCurveDown(-900);
bezierConstrainedCurveDown(800);
bezierConstrainedCurveDown(-700);
bezierConstrainedCurveDown(600);
bezierConstrainedCurveDown(-500);
bezierConstrainedCurveDown(400);
bezierConstrainedCurveDown(-300);
bezierConstrainedCurveDown(200);
bezierConstrainedCurveDown(-400);
bezierConstrainedCurveDown(600);
bezierConstrainedCurveDown(-800);

addConstrainedLine(edgeX+1000,edgeY);
edgeY+=wheelSize;

bezierConstrainedCurveDown(2000);

addConstrainedLine(-40,edgeY);

bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-200);
bezierConstrainedCurveUp(200);
bezierConstrainedCurveUp(-500);
bezierConstrainedCurveUp(500);
bezierConstrainedCurveUp(-500);
bezierConstrainedCurveUp(500);
bezierConstrainedCurveUp(-500);
bezierConstrainedCurveUp(500);
bezierConstrainedCurveUp(-500);
bezierConstrainedCurveUp(500);
bezierConstrainedCurveUp(-500);
bezierConstrainedCurveUp(500);
bezierConstrainedCurveUp(-500);
bezierConstrainedCurveUp(500);
bezierConstrainedCurveUp(-500);
bezierConstrainedCurveUp(500);
//-40,50
var endingPointHeight = (50-edgeY)-2*wheelSize;
bezierConstrainedCurveUp(endingPointHeight);

setLineScenery();
writeText("Slow down",5130,102);
writeText("Slowly",12910,2922);
writeText("Run!",15010,11612);
writeText("Run!",14010,11612);
writeText("Run!",14010,11612);
writeText("Almost there!",-45,11612);

