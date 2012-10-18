// ==UserScript==
// @name Canvasrider drawing console
// @description Canvasrider drawing console
// @version 0.1rc7
// @author Beothorn
// @include http://canvasrider.com/draw 
// @namespace https://github.com/beothorn/CanvasriderDrawingConsole
// ==/UserScript==

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

function curveDown(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+size-i,y+size,x,y+size-i);
    }
}

function curveUp(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+i,y,x+size,y-i);
    }
}

function curveUpRight(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x+i,y,x+size,y+i);
    }
}

function curveUpLeft(x,y,size,increment){
    for(var i = 0; i <= size;i+=increment){
        addLine(x-i,y,x-size,y+i);
    }
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
bufferCanvas.setAttribute('height','400px');
bufferCanvas.setAttribute('width','700px');
bufferCanvas.setAttribute('id','bufferCanvas');
div.insertBefore(bufferCanvas,divFirstElement);

function getCoords() {
    document.getElementById('coords').value = 'x: '+AF.x+' y: '+AF.y;
    setTimeout(getCoords, 100);
}

setTimeout(getCoords, 100);

document.getElementById('console').value = 'var x1 = 140; var y1 = -50; var x2 = 350; var y2 = -50; addLine(x1,y1,x2,y2); curveUp(40,50,100,1); curveUp(350,-50,1000,20); curveDown(1350,-50,1000,20); curveUp(2350,950,1000,20);writeText("https://github.com/beothorn/CanvasriderDrawingConsole",-40,50);';


var context = bufferCanvas.getContext('2d');

function clearBufferCanvas(){
    context.fillStyle   = '#ffffff';
    context.fillRect  (0,   0, bufferCanvas.width, bufferCanvas.height);
}

function writeTextOnBufferCanvas(text){
    context.fillStyle    = '#000000';
    context.font         = 'italic 50px sans-serif';
    context.textBaseline = 'top';
    context.fillText  (text, 0, 0);
}


function dumpBufferCanvas(crX,crY){
    var canvasImgData = context.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height).data;
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
        }
        if(red == 255){
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

