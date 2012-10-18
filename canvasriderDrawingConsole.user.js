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

var coords = document.createElement("textarea");
coords.setAttribute('id','coords');
coords.setAttribute('rows','1');
div.appendChild(coords);

var input = document.createElement("textarea");
input.setAttribute('id','console');
input.setAttribute('rows','5');
div.appendChild(input);

setTimeout('repeattimeout()', 100);

function repeattimeout() {
    document.getElementById('coords').value = 'x: '+AF.x+' y: '+AF.y;
    setTimeout('repeattimeout()', 100);
}

document.getElementById('console').value = 'var x1 = 140; var y1 = -50; var x2 = 350; var y2 = -50; addLine(x1,y1,x2,y2); curveUp(40,50,100,1); curveUp(350,-50,1000,20); curveDown(1350,-50,1000,20); curveUp(2350,950,1000,20);';

var buttonnode= document.createElement('input');
buttonnode.setAttribute('type','button');
buttonnode.setAttribute('name','RUN');
buttonnode.setAttribute('value','RUN');
div.appendChild(buttonnode);
buttonnode.onclick= function() { eval(document.getElementById('console').value); };
