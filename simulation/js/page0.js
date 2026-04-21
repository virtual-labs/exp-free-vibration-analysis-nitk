function runPage0() {
  document.querySelector("#observations").style.display = "none";
  document.querySelector("#canvas-container").style.display = "block";
    background(255);
    // image(bg, 0, 0)
    stroke(0);
    fill(0);

    push();
    textSize(36);
    // textFont("Times");
    textFont("nunito")
    // text('Two Degree of Freedom System',150, 50);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    push();
    stroke(0, 100);
    for (let i = 20; i < 591; i++) {
        point(i, 480);
        i += 2;
    }
    for (let i = 480; i < 570; i++) {
        point(360, i);
        i += 2;
    }
    pop();
    image(rider, 20, 150)
    image(spr2, 450, 200)
    textSize(14);
    textFont("nunito")
    fill(0,0,0);
    // stroke(0,0,0);

    text('Fig 1. A motorcycle with rider', 80, 400);
    text('(a)', 180, 420);
    text('(b)', 475, 420);


    textSize(14);
    textFont("nunito")
    fill(231, 114, 43);
    stroke(231, 114, 43);
    strokeWeight(0.5);    

    
    textSize(16); 
    text('m', 20, 500); 
    textSize(14); 
    text('v', 34, 505); 
    text("= is the mass of the vehicle", 50, 500);

    textSize(16); 
    text('m', 20, 520); 
    textSize(14); 
    text('r', 34, 525); 
    text("= is the mass of the rider", 50, 520);

    textSize(16); 
    text('m', 20, 540); 
    textSize(14); 
    text('w', 34, 545); 
    text("= is the mass of the wheel", 50, 540);

    textSize(16); 
    text('k', 20, 560); 
    textSize(14); 
    text('s', 34, 565); 
    text('and', 45, 560);
    textSize(16); 
    text('k', 75, 560); 
    textSize(14); 
    text('t', 85, 565);  
    text("are the stiffness of the strut and tire", 100, 565);
    text("(a) A Physical Model", 380, 500);
    text("(b) Mathematical model as ", 380, 520);
    text("2 DOF system", 390, 540);


textFont('Nunito')
textSize(26);
fill(0);
stroke(0);
strokeWeight(0.5);
text('Diagram',250,90)
strokeWeight(1);
 line(250,95,350,95);
// $('#Results').html("description");
document.getElementById("taskResult").innerHTML= "Description";
document.getElementById("taskResult1").innerHTML= "Description";
document.getElementById('Title-results').title = 'Description';
    function adjustCommentsWidth() {
        if ($(window).width() < 944) {
          $('#Results').css('width', '100%');
        } else {
       
          $('#Results').css('width', '200%');
     
        }
      }
      
      
      adjustCommentsWidth();
      
      $(window).resize(adjustCommentsWidth);
//  movetoTop();
}
