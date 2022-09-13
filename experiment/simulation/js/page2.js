function runPage2() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    strokeWeight(1);
    push();
    textSize(36);
    textFont("Times");
    text('TWO DEGREE OF FREEDOM SYSTEM',110, 50);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    strokeWeight(1);
    textSize(13);
    text('THE FIRST NATURAL FREQUENCY OF SYSTEM (ω1) : '+spring1.w1.toFixed(4)+' rad/s',30,150);
    text('THE SECOND NATURAL FREQUENCY OF SYSTEM (ω2) : '+spring1.w2.toFixed(4)+' rad/s',30,200);
    text('THE FIRST MODE SHAPE RATIO [(X1/X2) AT ω1] : '+spring1.ar1.toFixed(4),30,250);
    text('THE SECOND MODE SHAPE RATIO [(X1/X2) AT ω2] : '+spring1.ar2.toFixed(4),30,300);
    if(spring1.x1==spring1.x2){
    text('THE EQUATION OF MOTION OF M1 : '+spring1.ar1.toFixed(4) * spring1.x2.toFixed(4)+' cos('+spring1.w1.toFixed(4)+'t)',30,350);
    text('THE EQUATION OF MOTION OF M2 : '+spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)',30,400);
    }

    else if(spring1.x1==-(spring1.x2)){
        text('THE EQUATION OF MOTION OF M1: '+(spring1.ar2.toFixed(4)) * (spring1.x2.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t)',30,350);
        text('THE EQUATION OF MOTION OF M2: '+spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)',30,400);
    
    }
    else{
        text('THE EQUATION OF MOTION OF M1: '+(spring1.x1d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x1dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)',30,350);
        text('THE EQUATION OF MOTION OF M2: '+(spring1.x2d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x2dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)',30,400);
    }

    
    strokeWeight(1);
    spring1.initialise(x1.inp,x2.inp,k1.inp,m1.inp,k2.inp,m2.inp);
    spring1.update(t,factor)
    // spring1.show(0, 1, 0);
    // magFac1.initialise();
    // magFac1.draw();
    button3.draw()
    button4.draw()
    x1.draw();
    x2.draw();
    k1.draw();
    m1.draw();
    k2.draw();
    m2.draw();
    t = t+dt;
    //clear.mousePressed(clearMe);
}
