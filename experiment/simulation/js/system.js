class System  {
    constructor(x, y, _w, _h)   {
        this.width = _w;
        this.h = _h
        this.x_equilibrium = x;
        this.y_equilibrium = y;
        this.x1 = 0;
        this.x2 = 0;
        this.k1 = 0;
        this.m1 = 0;
        this.k2 = 0;
        this.m2 = 0;
        this.k3=0;
        this.w1 =0;
        this.w2 =0;
        this.x1d = 0;
        this.x2d = 0;
        this.x1dd = 0;
        this.x2dd = 0;
        this.ar1 = 0;
        this.ar2 = 0;
        this.masscoordinates = [];
     
    }
    

    initialise(_x1, _x2, _k1,_m1 ,_k2 ,_m2)  {
        this.x1 = _x1*500;
        this.x2 = _x2*500;
        this.k1 = _k1;
        this.m1 = _m1;
        this.k2 = _k2;
        this.m2 = _m2;
        
     
        this.term1 = Math.pow(((this.k1*this.m2)+(this.k2*this.m2)+(this.m1*this.k2)+(this.m1*this.k3))/(this.m1*this.m2),2);
        this.term2 = ((this.k1*this.k2)+(this.k1*this.k3)+(this.k2*this.k3))/(this.m1*this.m2);
        this.term3 = ((this.k1*this.m2)+(this.k2*this.m2)+(this.m1*this.k2)+(this.m1*this.k3))/(this.m1*this.m2);
        this.det = Math.pow((this.term1-(4*this.term2)),0.5);
      //  this.w2 = Math.pow((this.term3 + this.det)/2,0.5);
      //  this.w1 = Math.pow((this.term3 - this.det)/2,0.5);

        this.w1 = Math.pow((this.k2 + 2*this.k1)/this.m1 , 0.5);
        this.w2 = Math.pow((this.k2/this.m2) , 0.5);
        this.ar1= -this.k2/(this.k1+this.k2-(this.m1*Math.pow(this.w1,2)));
        this.ar2= -this.k2/((this.k1+this.k2)-(this.m1*Math.pow(this.w2,2)));
        
        
        this.x2d=(this.x1-(this.ar2*this.x2))/(this.ar1-this.ar2)*2;
        this.x2dd=((this.ar1*this.x2)-this.x1)/(this.ar1-this.ar2)*2;
        this.x1d=this.ar1*this.x2d*2;
        this.x1dd=this.ar2*this.x2dd*2;
     
        
    }

    update(t, _mulfact)  {
        //this.fi = atan((-2*this.z*this.w / this.wn) / (1 - (this.w*this.w)/(this.wn*this.wn)));
        if(this.x1==this.x2){
        
            this.y2 = -(_mulfact*this.x2 * Math.cos(this.w1*t));
            
            this.y1 = -(_mulfact*this.ar1*this.x1*Math.cos(this.w1*t));  
        }
        else if(this.x1==-(this.x2)){
            this.y2 = -(_mulfact*this.x2 * Math.cos(this.w2*t));
            this.y1 = (_mulfact*this.ar2*this.x1 * Math.cos(this.w2*t)); 
            
        }
        else{
        this.y2 = -(_mulfact*this.x2d * Math.cos(this.w1*t))-(_mulfact*this.x2dd * Math.cos(this.w2*t));
        this.y1 = -(_mulfact*this.x1d * Math.cos(this.w1*t))-(_mulfact*this.x1dd * Math.cos(this.w2*t));
        }
    }

    show(_stroke, _strockweight, _fill) {
        push();
        let wid = spr.width-50;
        let hei = spr.height-140;
        textSize(15)
        fill(0,0,0)
        if(this.x1==0 && this.x2==0){
            fill(139,69,19);
            text("Enter the value of initial excitation",330,145);
            text('of mass m1 and m2 (Xo1 and Xo2)',330,165)
            text('respectively.',410,185)
            fill(0,0,0);
            text("Xo1", 495,245);
        strokeWeight(1);
        line(450,210,510,210);
        line(510,210,510,230);
        line(505,225,510,230);
        line(510,230,515,225);
        
        line(450,295,510,295);
        line(510,295,510,315);
        line(505,310,510,315);
        line(510,315,515,310);
        strokeWeight(0);
        text("Xo2", 495,330);
        }

        // spring
        image(spr, this.x_equilibrium - (wid/2), this.y_equilibrium -12.5 -hei +this.y1+10 , wid, hei-this.y1);
        fill(0,0,0)
        textSize(15)
        text("k1",this.x_equilibrium - (wid/2)-30, this.y_equilibrium -12.5 -(hei/2) +this.y1+10)
        image(spr, this.x_equilibrium -(wid/2), this.y_equilibrium -12.5-25 -(2*hei) + this.y2 +10, wid, hei-this.y2 + this.y1)
        // console.log(this.y_equilibrium -12.5-164 -(2*hei) +this.y2+this.y1+10,hei+this.y1);
        fill(0,0,0)
        textSize(15)
        text("k2",this.x_equilibrium -(wid/2)-30, this.y_equilibrium -12.5-25 -(1.5*hei) + this.y2 +10)

        // base
        rectMode(CENTER)
        fill(0,0,0)
        rect(this.x_equilibrium, this.y_equilibrium, this.width+40, this.h-20)
        
        // mass
        rect()
        stroke(_stroke);
        strokeWeight(_strockweight);
        fill(_fill);
        rectMode(CENTER)
        fill(139,69,19);
        rect(this.x_equilibrium ,this.y_equilibrium -(this.h/2) -hei +this.y1 -(this.h/2) +10, this.width-20, this.h) // bottom mass
        fill(255,255,255)
        textSize(12)
        text("m1",this.x_equilibrium-5 ,this.y_equilibrium -(this.h/2) -hei +this.y1 -(this.h/2)+13)
        rectMode(CENTER)
        fill(139,69,19);
        rect(this.x_equilibrium ,this.y_equilibrium -50 -(2*hei) +this.y2 +10, this.width-20, this.h) // top mass
        fill(255,255,255);
        textSize(12)
        text("m2",this.x_equilibrium-5,this.y_equilibrium -50 -(2*hei) + this.y2+13)
        pop();
        this.masscoordinates = [this.x_equilibrium ,this.y_equilibrium -(this.h/2) -hei +this.y1 -(this.h/2) +10, this.x_equilibrium ,this.y_equilibrium -50 -(2*hei)  +this.y2 +10]
    }

    static mag_func1(x, obj)  {

        let mu = obj.m1/obj.m2;
        let temp1 = x;
        let temp2 = Math.pow(((obj.w2*x)/obj.w1),2);
        let denom = ((1+mu)*temp2) + Math.pow(temp1,2);
        let solution = (1-Math.pow(temp1,2)) / ((Math.pow(temp1,2)*temp2)-denom+1)
        if (abs(solution)<200){
            return(abs(solution));
        }
        else{
            return (200);
        }
    }
    static mag_func2(x, obj)  {
        let mu = obj.m1/obj.m2;
        let temp1 = x;
        let temp2 = Math.pow(((obj.w2*x**x)/obj.w1),2);
        let denom = ((1+mu)*temp2) +Math.pow(temp1,2);
        let solution = (1)/ ((Math.pow(temp1,2)*temp2)-denom+1);
        if (abs(solution)<200){
            return(abs(solution));
        }
        else {
            return (200);
        }
    }
}
