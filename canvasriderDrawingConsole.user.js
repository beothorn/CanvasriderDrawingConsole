/ ==User==
/ / @name Canvasrider drawing console
// @namespace      https://github.com/beothorn/CanvasriderDrawingConsole
// @include        http://canvasrider.com/draw
// @match          http://canvasrider.com/draw
// @version        0.1rc7
// ==/User==

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

function curve(x,y,size){
    for(var i = 0; i < size;i++){
        addLine(x+i,y,x+size,y-i);
    }
}


var div = document.getElementById("track_menu");
var input = document.createElement("textarea");
input.setAttribute('id','console');
input.setAttribute('rows','5');
div.appendChild(input);

document.getElementById('console').value = 'var x1 = 140; var y1 = -50; var x2 = 350; var y2 = -50; addLine(x1,y1,x2,y2); curve(40,50,100); ';

var buttonnode= document.createElement('input');
buttonnode.setAttribute('type','button');
buttonnode.setAttribute('name','RUN');
buttonnode.setAttribute('value','RUN');
div.appendChild(buttonnode);
buttonnode.onclick= function() { eval(document.getElementById('console').value); };
