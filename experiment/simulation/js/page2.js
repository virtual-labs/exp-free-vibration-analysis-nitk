﻿function runPage2() {
  document.querySelector("#observations").style.display = "block";
  document.querySelector("#canvas-container").style.display = "none";
  let ob1 = document.querySelector(".ob1")
  let ob2 = document.querySelector(".ob2")
  let ob3 = document.querySelector(".ob3")
  let ob4 = document.querySelector(".ob4")
  let ob5 = document.querySelector(".ob5")
  let ob6 = document.querySelector(".ob6")
  ob1.innerHTML = '';
  ob2.innerHTML = '';
  ob3.innerHTML = '';
  ob4.innerHTML = '';
  ob5.innerHTML = '';
  ob6.innerHTML = '';
  ob1.innerHTML = 'THE FIRST NATURAL FREQUENCY OF SYSTEM  (ω\u2081): ';
  ob2.innerHTML = 'THE SECOND NATURAL FREQUENCY OF SYSTEM (ω\u2082): ';
  ob3.innerHTML = 'THE FIRST MODE SHAPE RATIO [(X1/X2) AT ω\u2081]:';
  ob4.innerHTML = 'THE SECOND MODE SHAPE RATIO [(X1/X2) AT ω\u2082]: ';
  ob5.innerHTML = 'THE EQUATION OF MOTION OF M\u2081: ';
  ob6.innerHTML = 'THE EQUATION OF MOTION OF M\u2082: ';
    background(255);
    // image(bg, 0, 0);
    
    stroke(0);
    fill(0);

  //   strokeWeight(1);
  //   push();
  //   // textSize(36);
  //   // textFont("Comic Sans MS");
   
  //   textFont('nunito');
  //   textSize(23);
  //   // fill(0);
  //   // // stroke(0);
  //   strokeWeight(0.5);
  //   text('Detailed Results',200,50);
  //   strokeWeight(1);
  //   //  line(250,95,350,95);
  //   // textSize(16);
  //  let colors = color("#089b93");
  //   pop();
  //   textFont("nunito");
  
  // textSize(13);
  function adjustTextSize() {
    resetObservationsAll()
    ob1.innerHTML += spring1.w1.toFixed(4) + ' rad/s';
    ob2.innerHTML += spring1.w2.toFixed(4) + ' rad/s';
    ob3.innerHTML += spring1.ar1.toFixed(4);
    ob4.innerHTML += spring1.ar2.toFixed(4);
   
      if ($(window).width() < 450) {
        // textSize(16);
        // strokeWeight(0.3);
        // fill(0)
        // text('THE FIRST NATURAL FREQUENCY OF SYSTEM  (ω\u2081) : ',40,100);
        // fill(colors); 
        // text(spring1.w1.toFixed(4) + ' rad/s', 430, 100);



        // fill(0)
        // text('THE SECOND NATURAL FREQUENCY OF SYSTEM (ω\u2082) : ',40,150);
        // fill(colors); 
        // text(spring1.w2.toFixed(4) + ' rad/s', 455, 150);

        // fill(0)
        // text('THE FIRST MODE SHAPE RATIO [(X1/X2) AT ω\u2081] : ',40,200);
        // fill(colors); 
        // text(spring1.ar1.toFixed(4), 410, 200);

        // fill(0)
        // text('THE SECOND MODE SHAPE RATIO [(X1/X2) AT ω\u2082] : ',40,250);
        // fill(colors); 
        // text(spring1.ar2.toFixed(4), 425, 250);

        if(spring1.x1==spring1.x2){
          resetObservations56()
           ob5.innerHTML += spring1.ar1.toFixed(4) * spring1.x2.toFixed(4)+' cos('+spring1.w1.toFixed(4)+'t)';
    ob6.innerHTML += +spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)';  
        //   fill(0)
        // text('THE EQUATION OF MOTION OF M\u2081 : ',40,300);
        // fill(colors); 
        // text(spring1.ar1.toFixed(4) * spring1.x2.toFixed(4)+' cos('+spring1.w1.toFixed(4)+'t)',320,300)

        // fill(0)
        // text('THE EQUATION OF MOTION OF M\u2082 : ',40,350);
        // fill(colors);
        // text(+spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)',320,350)

        }
    
        else if(spring1.x1==-(spring1.x2)){
          resetObservations56()
      
          ob5.innerHTML += (spring1.ar2.toFixed(4)) * (spring1.x2.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t)';
          ob6.innerHTML += spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)';
          // textSize(14);
          // fill(0);
          //   text('THE EQUATION OF MOTION OF M\u2081: ',40,300);
          //   fill(colors);
          //   text((spring1.ar2.toFixed(4)) * (spring1.x2.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t)',280,300);

          //   fill(0);
          //   text('THE EQUATION OF MOTION OF M\u2082: ',40,350);
          //   fill(colors);
          //   text(spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)',280,350);
         
        
        }
        else{
          resetObservations56()
          ob5.innerHTML += (spring1.x1d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x1dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)';  
          ob6.innerHTML += (spring1.x2d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x2dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)';
          // textSize(14);
          // fill(0);
          //   text('THE EQUATION OF MOTION OF M\u2081: ',40,300);
          //   fill(colors);
          //   text((spring1.x1d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x1dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)',280,300);

          //   fill(0);
          //   text('THE EQUATION OF MOTION OF M\u2082: ',40,350);
          //   fill(colors);
          //   text((spring1.x2d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x2dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)',280,350);

        }
      } else {
        resetObservationsAll()
        ob1.innerHTML += spring1.w1.toFixed(4) + ' rad/s';
        ob2.innerHTML+= spring1.w2.toFixed(4) + ' rad/s';
        ob3.innerHTML += spring1.ar1.toFixed(4);
        ob4.innerHTML += spring1.ar2.toFixed(4);
        
        // textSize(13);
        // strokeWeight(0.4);
        // fill(0)
        // text('THE FIRST NATURAL FREQUENCY OF SYSTEM (ω\u2081) : ',40,100);
        // fill(colors); 
        // text(spring1.w1.toFixed(4) + ' rad/s', 360, 100);
        // fill(0)
        // text('THE SECOND NATURAL FREQUENCY OF SYSTEM (ω\u2082) : ',40,150);
        // fill(colors); 
        // text(spring1.w2.toFixed(4) + ' rad/s', 375, 150);
        // fill(0)
        // text('THE FIRST MODE SHAPE RATIO [(X1/X2) AT ω\u2081] : ',40,200);
        // fill(colors); 
        // text(spring1.ar1.toFixed(4), 340, 200);
    
        // fill(0)
        // text('THE SECOND MODE SHAPE RATIO [(X1/X2) AT ω\u2082] : ',40,250);
        // fill(colors); 
        // text(spring1.ar2.toFixed(4), 355, 250);
    
        if(spring1.x1==spring1.x2){
          resetObservations56()
          ob5.innerHTML += spring1.ar1.toFixed(4) * spring1.x2.toFixed(4)+' cos('+spring1.w1.toFixed(4)+'t)';
        ob6.innerHTML += +spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)';
        //   fill(0)
        // text('THE EQUATION OF MOTION OF M\u2081 : ',40,300);
        // fill(colors); 
        // text(spring1.ar1.toFixed(4) * spring1.x2.toFixed(4)+' cos('+spring1.w1.toFixed(4)+'t)',270,300)

        // fill(0)
        // text('THE EQUATION OF MOTION OF M\u2082 : ',40,350);
        // fill(colors);
        // text(+spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)',270,350)
     
        }
    
        else if(spring1.x1==-(spring1.x2)){
          resetObservations56()
          ob6.innerHTML += spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)';
          ob5.innerHTML += (spring1.ar2.toFixed(4)) * (spring1.x2.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t)';  
          // fill(0);
          //   text('THE EQUATION OF MOTION OF M\u2081: ',40,300);
          //   fill(colors);
          //   text((spring1.ar2.toFixed(4)) * (spring1.x2.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t)',270,300);
          //   fill(0);
          //   text('THE EQUATION OF MOTION OF M\u2082: ',40,350);
          //   fill(colors);
          //   text(spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)',270,350);
        
        }
        else{
          resetObservations56()
          ob5.innerHTML += (spring1.x1d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x1dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)';  
          ob6.innerHTML += (spring1.x2d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x2dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)';
          // fill(0);
          //   text('THE EQUATION OF MOTION OF M\u2081: ',40,300);
          //   fill(colors);
          //   text((spring1.x1d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x1dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)',270,300);
          //   fill(0);
          //   text('THE EQUATION OF MOTION OF M\u2082: ',40,350);
          //   fill(colors);
           
          //   text((spring1.x2d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x2dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)',270,350);
          
        }
      }
    }

   function resetObservationsAll(){
     ob1.innerHTML = 'THE FIRST NATURAL FREQUENCY OF SYSTEM  (ω\u2081): ';
  ob2.innerHTML = 'THE SECOND NATURAL FREQUENCY OF SYSTEM (ω\u2082): ';
  ob3.innerHTML = 'THE FIRST MODE SHAPE RATIO [(X1/X2) AT ω\u2081]:';
  ob4.innerHTML = 'THE SECOND MODE SHAPE RATIO [(X1/X2) AT ω\u2082]: ';
  // ob5.innerHTML = 'THE EQUATION OF MOTION OF M\u2081: ';
  // ob6.innerHTML = 'THE EQUATION OF MOTION OF M\u2082: ';
   };

   function resetObservations56(){
     ob5.innerHTML = 'THE EQUATION OF MOTION OF M\u2081: ';
  ob6.innerHTML = 'THE EQUATION OF MOTION OF M\u2082: ';
   }
    
    // Call the function initially
    adjustTextSize();
    
    // Attach the function to the window.resize event
    $(window).resize(adjustTextSize);
  

    
    // strokeWeight(1);
    spring1.initialise(x1,x2,k1,m1,k2,m2);
    spring1.update(t,factor)
 
    x1 = $("#Xo1Spinner").spinner("value");
    x2 = $("#Xo2Spinner").spinner("value");
    k1 = $("#k1Spinner").spinner("value");
    m1= $("#m1Spinner").spinner("value");
    k2= $("#k2Spinner").spinner("value");
    m2= $("#m2Spinner").spinner("value");
    t = t+dt;
    //clear.mousePressed(clearMe);
 
    function adjustCommentsWidth() {
        if ($(window).width() < 944) {
       
          $('#variables').css('width', '100%');
  
        } else {
      
          $('#variables').css('width', '200%');
     
        }
      }
   
     
      adjustCommentsWidth();
      
     
      $(window).resize(adjustCommentsWidth);
}
