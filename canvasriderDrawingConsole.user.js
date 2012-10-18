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

function addLine(x1,y1,x2,y2){
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
       C.I[x][y].AG.push(P);
       delete C.Ax[x + "_" + y];
    }
}

function curveDownRight(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+size-i,y+size,x,y+size-i);
    }
    edgeX=x+size;
    edgeY=y+size;
}

function curveDownLeft(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+i-size,y+size,x,y-i+size);
    }
    edgeX=x+size;
    edgeY=y-size;
}

function curveUpRight(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x-i-size,y+size,x-size-size,y+i+size);
    }
    edgeX=x-size;
    edgeY=y+size;
}

function curveUpLeft(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x,y-i,x-i,y-size);
    }
    edgeX=x-size;
    edgeY=y-size;
}

function curveRightUp(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+i,y,x+size,y-i);
    }
    edgeX=x+size;
    edgeY=y-size;
}

function curveRightDown(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+i,y,x+size,y+i);
    }
    edgeX=x+size;
    edgeY=y+size;
}

function curveLeftUp(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x-i,y,x,y-i);
    }
    edgeX=x+size;
    edgeY=y+size;
}

function curveLeftDown(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x-i,y,x-size,y+i);
    }
    edgeX=x-size;
    edgeY=y+size;
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
'    writeText("CanvasriderDrawingConsole example track",-40,50);\n'+
'    var x1 = edgeX;\n'+
'    var y1 = edgeY;\n'+
'    var x2 = 500;\n'+
'    var y2 = 50;\n'+
'    addLine(x1,y1,x2,y2);\n'+
'    var curveStartX = edgeX;\n'+
'    var curveStartY = edgeY;\n'+
'    var curveSize = 1000;\n'+
'    var curveIncrement = 20;\n'+
'    curveRightUp(curveStartX,curveStartY,curveSize,curveIncrement);\n'+
'    curveUpLeft(edgeX,edgeY,1000,20);\n'+
'    curveLeftDown(edgeX,edgeY,1000,20);\n'+
'    curveDownRight(edgeX,edgeY,2000,40);\n'+
'    curveRightDown(edgeX+2000,edgeY-100,1000,20);\n'+
'    curveDownLeft(edgeX,edgeY,1000,20);\n'+
'    curveLeftUp(edgeX,edgeY,1000,20);\n'+
'    curveUpRight(edgeX,edgeY,500,40);\n';


var bufferCanvasContext = bufferCanvas.getContext('2d');

function clearBufferCanvas(){
    bufferCanvasContext.fillStyle   = '#ffffff';
    bufferCanvasContext.fillRect  (0,   0, bufferCanvas.width, bufferCanvas.height);
}

function writeTextOnBufferCanvas(text){
    bufferCanvasContext.fillStyle    = '#000000';
    bufferCanvasContext.font         = '30px Arial';
    bufferCanvasContext.textBaseline = 'top';
    bufferCanvasContext.fillText(text, 0, 0);
}

function dumpBufferCanvas(crX,crY){
    var canvasImgData = bufferCanvasContext.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height).data;
    var pixels = bufferCanvas.width*bufferCanvas.height;
    var pixelCount=0;
    var isDrawingLine = false;
    var prevX=0;
    var prevY=0;
    while(pixelCount++<=pixels){
        var red =  canvasImgData[4*pixelCount+0];
        //var green = canvasImgData[4*pixelCount+1];
        //var blue =  canvasImgData[4*pixelCount+2];
        //var alpha =  canvasImgData[4*pixelCount+3];
        var x = pixelCount % bufferCanvas.width;
        var y = Math.floor(pixelCount / bufferCanvas.height);
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
                addLine(prevX+crX,prevY+crY,x+crX,y+crY);
            }
            isDrawingLine=false;
        }

        if(Math.floor( (pixelCount+1) / bufferCanvas.height)  > y){
            if(isDrawingLine){
                addLine(prevX+crX,prevY+crY,x+crX,y+crY);
            }
        }
    }
}

function writeText(text, x, y){
    clearBufferCanvas();
    writeTextOnBufferCanvas(text);
    dumpBufferCanvas(x,y);
}

