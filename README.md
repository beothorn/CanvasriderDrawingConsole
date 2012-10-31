CanvasriderDrawingConsole
=========================

A Greasemonkey script to use on the game canvasrider that adds a console and some useful functions to it .  
Also adds a text field with the coordinates of the last added point.  

Instalation
===========
You will need firefox with greasemonkey (https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)  
After that just use this link:  
https://github.com/beothorn/CanvasriderDrawingConsole/raw/master/canvasriderDrawingConsole.user.js

If you use the CanvasriderDrawingConsole please post your track on issue #1  
htps://github.com/beothorn/CanvasriderDrawingConsole/issues/1  

Usage
===========
  
Functions that can be called from the console (besides normal javascript):  
  writeText(text,x,y);  
  addLine(x1,y1,x2,y2);  
  addLineE(x2,y2);//Adds a line starting on the ending coordinate of the last thing added  
  curveRightUp(x1,y1,x2,y2);  
  curveRightUpE(x2,y2);  
  ...  
  addBelzier(x1,y1,cX1,cY1,x2,y2,cX2,cY2);//Where cX1 is the control coordinate for (x1,y1), see http://en.wikipedia.org/wiki/B%C3%A9zier_curve  
  addBelzierE(cX1,cY1,x2,y2,cX2,cY2);  

You can plot any function with plot. For example:  
plotE(function(x){return x+1;},size,increment);  
or  
plotE(function(x){return x*(x*0.001);},500,10);  
or  
plotE(function(x){return Math.sin(x/frequency)*amplitude;},size,increment);  

To switch between scenery lines and solid lines use  
setLineScenery();  
and   
setLineSolid();  

The script also adds another canvas, the bufferCanvas. The function  
  dumpBufferCanvas(x,y);
dumps the contents of the bufferCanvas to the x,y coordinate on the track. To clear the buffer call:  
  clearBufferCanvas();  

You can draw on the canvas using normal javascript. For example:  

  clearBufferCanvas();  
  getContext().beginPath();  
  getContext().arc(75,75,50,0,Math.PI*2,true); // Outer circle  
  getContext().moveTo(110,75);  
  getContext().arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)  
  getContext().moveTo(65,65);  
  getContext().arc(60,65,5,0,Math.PI*2,true);  // Left eye  
  getContext().moveTo(95,65);  
  getContext().arc(90,65,5,0,Math.PI*2,true);  // Right eye  
  getContext().stroke();  
  dumpBufferCanvas(0,0);  

will draw a smile on (0,0)  

Every time you call addline the variables edgeX and edgeY change to x2 and y2.  

You can find a detailed exemple of what can be done on exampleTrack.js  



