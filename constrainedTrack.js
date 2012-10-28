var wheelSize = 30;
addLine(-40,edgeY-wheelSize,edgeX,edgeY-wheelSize);
resetEdge();

function sineWave(frequency,amplitude){
  var startingX = edgeX;
  var startingY = edgeY;
  edgeY = startingY - wheelSize;
  var sineWaveCenter = edgeY;
  for(var i=0; i<250;i++){
    addLineE(edgeX+10,sineWaveCenter+(Math.sin(i/frequency)*amplitude));
  }
  edgeX = startingX;
  edgeY = startingY;
  sineWaveCenter = edgeY;
  for(var i=0; i<250;i++){
    addLineE(edgeX+10,sineWaveCenter+(Math.sin(i/frequency)*amplitude));
  }
}

sineWave(10,80);

function bezierCurve(xStart,yStart,xEnd,yEnd,height){
  addBelzier(xStart,yStart,xStart+height,yStart,xEnd,yEnd,xEnd+height,yEnd);
}

function bezierConstrainedCurveUp(height){
  var beforeX = edgeX;
  var beforeY = edgeY;
  if(height>0){
    edgeY -= height+wheelSize;
  }else{
    edgeY += height+wheelSize;
  }
  bezierConstrainedCurveDown(height);
  edgeX = beforeX;
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

bezierConstrainedCurveDown(600);
bezierConstrainedCurveDown(-600);
bezierConstrainedCurveDown(800);
bezierConstrainedCurveDown(-1000);

sineWave(50,200);
bezierConstrainedCurveDown(500);
bezierConstrainedCurveDown(-200);
bezierConstrainedCurveDown(200);
var oldEdgeY = edgeY;
var oldEdgeX = edgeX;
addLineE(-40,edgeY);
edgeY = oldEdgeY-wheelSize;
edgeX = oldEdgeX;
addLineE(-40,edgeY);
bezierConstrainedCurveUp(-200);
