//Paste javascript here
//Example usage:
    resetEdge();
    writeText("Example Track",edgeX,edgeY);
    addLine(381,edgeY,500,edgeY);
    setLineScenery();
    writeText("CanvasriderDrawingConsole",53,-131);
    writeText("sine wave",550,0);
    setLineSolid();
    var sineWaveCenter = edgeY;
    var frequency = 100;
    var amplitude = 80;
    var size = 2500;
    var increment = 10;
    plotE(function(x){return Math.sin(x/frequency)*amplitude;},size,increment);
    writeText("curveRightUp",3000,50);
    curveRightUpE(500,20);
    writeText("curveDownRight",3950,460);
    curveDownRightE(2000,40);
    addLineE(edgeX+1000,edgeY);
    writeText("curveRightDown",7542,1361);
    curveRightDown(edgeX+1000,edgeY-100,1000,20);
    writeText("curveDownLeft",7807,3441);
    curveDownLeftE(1000,20);
    writeText("curveLeftUp",6502,3441);
    curveLeftUpE(1000,20);
    writeText("curveUpRight",6822,1926);
    curveUpRightE(800,20);
    addLine(edgeX-4500,edgeY-100,6477,3808);
    addLineE(edgeX+3000,edgeY);
    writeText("dumpBufferCanvas",6512,3823);
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
    dumpBufferCanvas(7082,3838);
    writeText("Source code on github",7386,3823);
    clearBufferCanvas();
    getContext().strokeStyle = "#000000";
    getContext().font         = "80px Arial";
    getContext().strokeText("Thumbs up!", 0, 0);
    dumpBufferCanvas(10805,3581);
    curveRightUpE(500,20);
    curveDownRightE(500,20);
    addLine(edgeX,edgeY,edgeX+3000,edgeY);
    writeText("Click",9325,6309);
    writeText("Here",9325,6359);
    addBelzierE(edgeX+500,edgeY+500,edgeX+1000,edgeY,edgeX+1000-500,edgeY+500);

