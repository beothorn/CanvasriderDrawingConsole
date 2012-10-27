// ==UserScript==
// @name Canvasrider drawing console
// @description Canvasrider drawing console
// @version 0.1rc7
// @author Beothorn
// @include http://canvasrider.com/draw 
// @namespace https://github.com/beothorn/CanvasriderDrawingConsole
// ==/UserScript==

var edgeX=40;
var edgeY=50;

//====================================\\
// 13thParallel.org Beziér Curve Code \\
//   by Dan Pupius (www.pupius.net)   \\
//====================================\\

coord = function (x,y) {
  if(!x) var x=0;
  if(!y) var y=0;
  return {x: x, y: y};
}

function B1(t) { return t*t*t }
function B2(t) { return 3*t*t*(1-t) }
function B3(t) { return 3*t*(1-t)*(1-t) }
function B4(t) { return (1-t)*(1-t)*(1-t) }

function getBezier(percent,C1,C2,C3,C4) {
  var pos = new coord();
  pos.x = C1.x*B1(percent) + C2.x*B2(percent) + C3.x*B3(percent) + C4.x*B4(percent);
  pos.y = C1.y*B1(percent) + C2.y*B2(percent) + C3.y*B3(percent) + C4.y*B4(percent);
  return pos;
}
//END
//====================================\\
// 13thParallel.org Beziér Curve Code \\
//   by Dan Pupius (www.pupius.net)   \\
//====================================\\

function resetEdge(){
    edgeX=40;
    edgeY=50;
}

var lineType = "solid";

function setLineSolid(){
	lineType = "solid";
}

function setLineScenery(){
	lineType = "scenery";
}

function extractedAddLine(x1,y1,x2,y2){
    var P = new line(x1,y1,x2,y2);
    var I = CG(new J(P.AH.x, P.AH.y), new J(P.AK.x, P.AK.y), C.q);
    for (var T = 0; T < I.length; T++) {
        var x = Math.floor(I[T].x / C.q);
        var y = Math.floor(I[T].y / C.q);
        if (C.I[x] == undefined) {
            C.I[x] = new Array;
        }
        if (C.I[x][y] == undefined) {
            C.I[x][y] = new BP;
        }
	
	if(lineType == "solid")
		C.I[x][y].AG.push(P);
	else
		C.I[x][y].AL.push(P);

       delete C.Ax[x + "_" + y];
    }
}

function addLine(x1,y1,x2,y2){
    extractedAddLine(x1,y1,x2,y2);
    edgeX=x2;
    edgeY=y2;
}

function addLineE(x2,y2){
    addLine(edgeX,edgeY,x2,y2);
}

function curveDownRight(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+size-i,y+size,x,y+size-i);
    }
    edgeX=x+size;
    edgeY=y+size;
}

function curveDownRightE(size,increment){
    curveDownRight(edgeX,edgeY,size,increment);
}

function curveDownLeft(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+i-size,y+size,x,y-i+size);
    }
    edgeX=x-size;
    edgeY=y+size;
}

function curveDownLeftE(size,increment){
    curveDownLeft(edgeX,edgeY,size,increment);
}

function curveUpRight(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x,y-i,x+i,y-size);
    }
    edgeX=x+size;
    edgeY=y-size;
}

function curveUpRightE(size,increment){
    curveUpRight(edgeX,edgeY,size,increment)
}

function curveUpLeft(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x,y-i,x-i,y-size);
    }
    edgeX=x-size;
    edgeY=y-size;
}

function curveUpLeftE(size,increment){
    curveUpLeft(edgeX,edgeY,size,increment)
}

function curveRightUp(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+i,y,x+size,y-i);
    }
    edgeX=x+size;
    edgeY=y-size;
}

function curveRightUpE(size,increment){
    curveRightUp(edgeX,edgeY,size,increment)
}

function curveRightDown(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+i,y,x+size,y+i);
    }
    edgeX=x+size;
    edgeY=y+size;
}

function curveRightDownE(size,increment){
    curveRightDown(edgeX,edgeY,size,increment)
}

function curveLeftUp(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+i-size,y,x-size,y-size+i);
    }
    edgeX=x-size;
    edgeY=y-size;
}

function curveLeftUpE(size,increment){
    curveLeftUp(edgeX,edgeY,size,increment)
}

function curveLeftDown(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x-i,y,x-size,y+i);
    }
    edgeX=x-size;
    edgeY=y+size;
}

function curveLeftDownE(size,increment){
    curveLeftDown(edgeX,edgeY,size,increment)
}

function addBelzier(x1,y1,cX1,cY1,x2,y2,cX2,cY2){
    var P1 = coord(x1,y1);
    var C1 = coord(cX1,cY1);
    var P2 = coord(x2,y2);
    var C2 = coord(cX2,cY2);

    var dx = x1 - x2;         //horizontal difference 
    var dy = y1 - y2;         //vertical difference 
    var distance = Math.sqrt( dx*dx + dy*dy );

    var x = x1;
    var y = y1;
    for(var i = 0;i <= distance;i=i+10){
        var newPoint = getBezier(i/distance,P2,C2,C1,P1);
        addLine(x,y,newPoint.x,newPoint.y);
        x = newPoint.x;
        y = newPoint.y;
    }
    addLine(x,y,x2,y2);
    edgeX=x2;
    edgeY=y2;
}

function addBelzierE(cX1,cY1,x2,y2,cX2,cY2){
    addBelzier(edgeX,edgeY,cX1,cY1,x2,y2,cX2,cY2);
}

var div = document.getElementById("track_menu");
var divFirstElement = document.getElementById("charcount");

var coords = document.createElement("textarea");
coords.setAttribute('id','coords');
coords.setAttribute('rows','1');
div.insertBefore(coords,divFirstElement);

var input = document.createElement("textarea");
input.setAttribute('id','console');
input.setAttribute('rows','5');
div.insertBefore(input,divFirstElement);

var buttonnode= document.createElement('input');
buttonnode.setAttribute('type','button');
buttonnode.setAttribute('name','RUN');
buttonnode.setAttribute('value','RUN');
buttonnode.onclick= function() { eval(document.getElementById('console').value); };
div.insertBefore(buttonnode,divFirstElement);

var bufferCanvas = document.createElement("canvas");
function setBufferSize(width,height){
    bufferCanvas.setAttribute('width',width+'px');
    bufferCanvas.setAttribute('height',height+'px');
}
setBufferSize(700,400);
bufferCanvas.setAttribute('id','bufferCanvas');
div.insertBefore(bufferCanvas,divFirstElement);

function getCoords() {
    document.getElementById('coords').value = 'x: '+AF.x+' y: '+AF.y;
    setTimeout(getCoords, 100);
}

setTimeout(getCoords, 100);

document.getElementById('console').value = 
'//Paste javascript here\n'+
'//Example usage:\n'+
'    resetEdge();\n'+
'    writeText("CanvasriderDrawingConsole",53,-131);\n'+
'    writeText("Example Track",edgeX,edgeY);\n'+
'    addLine(381,edgeY,500,edgeY);\n'+
'    setLineScenery();\n'+
'    writeText("sine wave",550,0);\n'+
'    setLineSolid();\n'+
'    var sineWaveCenter = edgeY;\n'+
'    var frequency = 10;\n'+
'    var amplitude = 80;\n'+
'    for(var i=0; i<250;i++){\n'+
'        addLineE(edgeX+10,sineWaveCenter+(Math.sin(i/frequency)*amplitude));\n'+
'    }\n'+
'    writeText("curveRightUp",3000,50);\n'+
'    curveRightUpE(500,20);\n'+
'    writeText("curveDownRight",3950,460);\n'+
'    curveDownRightE(2000,40);\n'+
'    addLineE(edgeX+1000,edgeY);\n'+
'    writeText("curveRightDown",7542,1361);\n'+
'    curveRightDown(edgeX+1000,edgeY-100,1000,20);\n'+
'    writeText("curveDownLeft",7807,3441);\n'+
'    curveDownLeftE(1000,20);\n'+
'    writeText("curveLeftUp",6502,3441);\n'+
'    curveLeftUpE(1000,20);\n'+
'    writeText("curveUpRight",6822,1926);\n'+
'    curveUpRightE(800,20);\n'+
'    addLine(6500,1632,4967,2423);\n'+
'    addLine(edgeX-400,edgeY-100,6477,3808);\n'+
'    addLineE(edgeX+3000,edgeY);\n'+
'    writeText("dumpBufferCanvas",6512,3823);\n'+
'    clearBufferCanvas();\n'+
'    getContext().beginPath();\n'+
'    getContext().arc(75,75,50,0,Math.PI*2,true); // Outer circle\n'+
'    getContext().moveTo(110,75);\n'+
'    getContext().arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)\n'+
'    getContext().moveTo(65,65);\n'+
'    getContext().arc(60,65,5,0,Math.PI*2,true);  // Left eye\n'+
'    getContext().moveTo(95,65);\n'+
'    getContext().arc(90,65,5,0,Math.PI*2,true);  // Right eye\n'+
'    getContext().stroke();\n'+
'    dumpBufferCanvas(7082,3838);\n'+
'    writeText("Source code on github",7386,3823);\n'+
'    clearBufferCanvas();\n'+
'    getContext().strokeStyle = "#000000";\n'+
'    getContext().font         = "80px Arial";\n'+
'    getContext().strokeText("Thumbs up!", 0, 0);\n'+
'    dumpBufferCanvas(10805,3581);\n'+
'    curveRightUpE(500,20);\n'+
'    curveDownRightE(500,20);\n'+
'    addLine(edgeX,edgeY,edgeX+3000,edgeY);\n'+
'    writeText("Click",9325,6309);\n'+
'    writeText("Here",9325,6359);\n'+
'    addBelzierE(edgeX+500,edgeY+500,edgeX+1000,edgeY,edgeX+1000-500,edgeY+500);\n'+
'';



function getContext(){
    return document.getElementById('bufferCanvas').getContext('2d');
}

function clearBufferCanvas(){
    var bufferWidth = parseInt(bufferCanvas.getAttribute('width'));
    var bufferHeight = parseInt(bufferCanvas.getAttribute('height'));
    var ctx =  getContext();
    ctx.fillStyle   = '#ffffff';
    ctx.fillRect  (0,   0, bufferWidth, bufferHeight);
}

function writeTextOnBufferCanvas(text){
    var ctx =  getContext();
    ctx.fillStyle    = '#000000';
    ctx.font         = '50px Arial';
    ctx.textBaseline = 'top';
    ctx.fillText(text, 0, 0);
}

function dumpBufferCanvasVerticalLines(crX,crY){
    var bufferWidth = parseInt(bufferCanvas.getAttribute('width'));
    var bufferHeight = parseInt(bufferCanvas.getAttribute('height'));
    var canvasImgData = getContext().getImageData(0, 0, bufferWidth, bufferHeight).data;
    var pixels = bufferWidth*bufferHeight;
    var i=0;
    var isDrawingLine = false;
    var prevX=0;
    var prevY=0;
    while(i++<=pixels){
	var pixelCount = ((i%bufferHeight)*bufferWidth) +  Math.floor(i/bufferHeight);
        var red =  canvasImgData[4*pixelCount+0];
        //var green = canvasImgData[4*pixelCount+1];
        //var blue =  canvasImgData[4*pixelCount+2];
        //var alpha =  canvasImgData[4*pixelCount+3];
        var x = pixelCount % bufferWidth;
        var y = Math.floor(pixelCount / bufferWidth);
        if(y == 0){
            isDrawingLine = false;
            prevX=x;
            prevY=0;
        }
        if(red < 255){
            if(!isDrawingLine){
                isDrawingLine=true;
                prevX=x;
                prevY=y;
            }
        }else{
            if(isDrawingLine){
                extractedAddLine(prevX+crX,prevY+crY,x+crX,y+crY);
            }
            isDrawingLine=false;
        }

        var nextPixelCount = ((i+1%bufferHeight)*bufferWidth) +  Math.floor(i+1/bufferHeight);
        if(Math.floor( nextPixelCount % bufferWidth)  > x){
            if(isDrawingLine){
                extractedAddLine(prevX+crX,prevY+crY,x+crX,y+crY);
            }
        }
    }
}

function dumpBufferCanvasHorizontalLines(crX,crY){
    var bufferWidth = parseInt(bufferCanvas.getAttribute('width'));
    var bufferHeight = parseInt(bufferCanvas.getAttribute('height'));
    var canvasImgData = getContext().getImageData(0, 0, bufferWidth, bufferHeight).data;
    var pixels = bufferWidth*bufferHeight;
    var pixelCount=0;
    var isDrawingLine = false;
    var prevX=0;
    var prevY=0;
    while(pixelCount++<=pixels){
        var red =  canvasImgData[4*pixelCount+0];
        //var green = canvasImgData[4*pixelCount+1];
        //var blue =  canvasImgData[4*pixelCount+2];
        //var alpha =  canvasImgData[4*pixelCount+3];
        var x = pixelCount % bufferWidth;
        var y = Math.floor(pixelCount / bufferWidth);
        if(x == 0){
            isDrawingLine = false;
            prevX=x;
            prevY=0;
        }
        if(red == 0){
            if(!isDrawingLine){
                isDrawingLine=true;
                prevX=x;
                prevY=y;
            }
        }else{
            if(isDrawingLine){
                extractedAddLine(prevX+crX,prevY+crY,x+crX,y+crY);
            }
            isDrawingLine=false;
        }

        if(Math.floor( (pixelCount+1) / bufferWidth)  > y){
            if(isDrawingLine){
                extractedAddLine(prevX+crX,prevY+crY,x+crX,y+crY);
            }
        }
    }
}

function dumpBufferCanvas(crX,crY){
    dumpBufferCanvasHorizontalLines(crX,crY);
    dumpBufferCanvasVerticalLines(crX,crY);
}

function writeText(text, x, y){
    clearBufferCanvas();
    writeTextOnBufferCanvas(text);
    dumpBufferCanvasHorizontalLines(x,y);
}

var buttonnode= document.createElement('input');
buttonnode.setAttribute('type','file');
buttonnode.setAttribute('id','input');
div.insertBefore(buttonnode,divFirstElement);

window.onload = function() {
    var input = document.getElementById('input');
    input.addEventListener('change', handleFiles);
}

function handleFiles(e) {
    var reader = new FileReader;
    reader.onload = function(event) {
        var img = new Image;
        img.src = event.target.result;
        img.onload = function() {
            bufferCanvas.setAttribute('width',img.width);
            bufferCanvas.setAttribute('height',img.height);
            getContext().drawImage(img, 0,0);
        }
    }
    reader.readAsDataURL(e.target.files[0]);
}


