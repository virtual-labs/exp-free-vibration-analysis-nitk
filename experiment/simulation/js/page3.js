function runPage3() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    push();
    strokeWeight(1);
    textSize(36);
    textFont("Times");
    text('TWO DEGREE OF FREEDOM SYSTEM',100, 40);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    textSize(15);
    text('X1',20,300);
    text('X2',20,400);
    strokeWeight(0.5);
    line(45,300,590,300);
    line(45,400,590,400);
    if(spring1.x1==spring1.x2){
    textFont("Comic Sans MS");
    textSize(20);
    text("MODE SHAPE", 250, 110);
    textSize(15);
    text("When the initial excitation is given same to both masses in same direction, it",30,150);
    text("gives only the first mode shape of the system",150,170);
    strokeWeight(1.5);
    stroke(0);
    line(300,200,300,500);
    stroke(0,0,255);
    line(300,300,300+(spring1.ar1*spring1.x2*2),300);
    line(300,400,300+(spring1.x2*2),400);
    stroke(255,0,0);
    line(300,200,300+(spring1.ar1*spring1.x2*2),300);
    line(300+(spring1.ar1*spring1.x2*2),300,300+(spring1.x2*2),400);
    line(300+(spring1.x2*2),400,300,500);

    }
    else if(spring1.x1==(-spring1.x2)){
        textFont("Comic Sans MS");
        textSize(20);
        text("MODE SHAPE", 250, 110);
        textSize(15);
        text("When the initial excitation is given same to both masses in different direction, it",30,150)
        text("gives only the second mode shape of the system",150,170);
        strokeWeight(2);
        stroke(0);
        line(300,200,300,500);
        stroke(0,0,255);
        line(300,300,300+(spring1.ar2*spring1.x2*2),300);
        line(300,400,300+(spring1.x2*2),400);
        stroke(255,0,0);
        line(300,200,300+(spring1.ar2*spring1.x2*2),300);
        line(300+(spring1.ar2*spring1.x2*2),300,300+(spring1.x2*2),400);
        line(300+(spring1.x2*2),400,300,500);
    
        }
    else{
    textFont("Comic Sans MS");
    textSize(20);
    text("MODE SHAPES", 215, 110);
    textSize(15);
    text("FIRST MODE SHAPE",90,180);
    text("SECOND MODE SHAPE",370,180);
    

    strokeWeight(3);
    stroke(0);
    line(120,200,120,500);
    stroke(0,0,255);
    line(120,300,120+(spring1.x1d*2),300);
    line(120,400,120+(spring1.x2d*2),400);
    stroke(255,0,0);
    line(120,200,120+(spring1.x1d*2),300);
    line(120+(spring1.x1d*2),300,120+(spring1.x2d*2),400);
    line(120+(spring1.x2d*2),400,120,500);

    strokeWeight(3);
    stroke(0);
    line(400,200,400,500);
    stroke(0,0,255);
    line(400,300,400+(spring1.x1dd*2),300);
    line(400,400,400+(spring1.x2dd*2),400);
    stroke(255,0,0);
    line(400,200,400+(spring1.x1dd*2),300);
    line(400+(spring1.x1dd*2),300,400+(spring1.x2dd*2),400);
    line(400+(spring1.x2dd*2),400,400,500);
    }
    
    strokeWeight(1);
    spring1.initialise(x1.inp,x2.inp,k1.inp,m1.inp,k2.inp,m2.inp);
    spring1.update(t, factor);
    button5.draw()
    x1.draw();
    x2.draw();
    k1.draw();
    m1.draw();
    k2.draw();
    m2.draw();
    t = t+dt;
    //clear.mousePressed(clearMe);
}
