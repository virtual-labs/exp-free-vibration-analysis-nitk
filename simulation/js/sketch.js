// canvas
let width = 800;
let height = 600;

// counter
let t = 0.05;
let dt = 0.01;

// system
let spring1;

//polar moment of inertia

let J;

//

// graphs
let position_graph1;
let position_graph2;
let magFac;

let M;
let w;
let F0;

// factor
let factor = 1;

// images
let img;
let button0;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let spr;

// pages
let page0 = true;
let page1 = false;
let page2 = false;
let page3 = false;

// animation
let animation = true;
let touch = false;

// Buttons
let clear;


let page=0;
function preload() {
 
  rider = loadImage("images/ride.png");
  spr = loadImage("images/spring.png");
  spr2 = loadImage("images/spr2.png");
  // console.log("hello page one")
  document.getElementById('variables').style.display = "none";
  document.getElementById('Results').style.display = "block";
  $('#variables1').css({
    "opacity": 0.5,
    "pointer-events": "none"
  });
  $('#Results1').css({
    "opacity": 1,
    "pointer-events": "auto"
  });
  document.getElementById("taskResult").innerHTML= "Description";
  document.getElementById("taskResult1").innerHTML= "Description";
  page=0;


  document.querySelector(".graph-two").classList.remove("display-hide");
  document.querySelector(".graph-one").classList.add("display-hide");
document.querySelector(".graph-div span").textContent = "Next";
$('#p1, #p2, #p3,#p4,#p5,#p6').each(function() {
  // Perform actions on each element
  $(this).css('display', 'block');
});
$('#p7, #p8, #p9,#p10').each(function() {
   
  $(this).css('display', 'none');
});
  


}


function setup() {


  var sketchCanvas = createCanvas(600, 450);
  sketchCanvas.parent("canvas-container");

  spring1 = new System(450, 365, 90, 25);

  position_graph1 = new Graph(50, 295, 100, 220, "x\u2081", "t");

  position_graph2 = new Graph(50, 210, 100, 220, "x\u2082", "t");

  magFac1 = new DynamicGraph(
    50,
    400,
    300,
    220,
    "X/Xst",
    "ω/ω2",
    0,
    7,
    0,
    10,
    System.mag_func1
  );
  magFac2 = new DynamicGraph(
    50,
    400,
    300,
    220,
    "X2/Xst",
    "ω/ω2",
    0,
    7,
    0,
    10,
    System.mag_func2
  );

 


  

  varinit();
  x1 = $("#Xo1Spinner").spinner("value");
  x2 = $("#Xo2Spinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1= $("#m1Spinner").spinner("value");
  k2= $("#k2Spinner").spinner("value");
  m2= $("#m2Spinner").spinner("value");


 
}

function draw() {
  if (page0) {
    runPage0();
  }
  if (page1) {
    runPage1();
  }

  if (page2) {
    runPage2();
  }

  if (page3) {
    runPage3();
  }
}
function simstate() {
  var imgfilename = document.getElementById("playpausebutton").src;
  imgfilename = imgfilename.substring(
    imgfilename.lastIndexOf("/") + 1,
    imgfilename.lastIndexOf(".")
  );

  if (animation) {
    noLoop();
    animation = false;
    document.getElementById("playpausebutton").src = "images/blueplaydull.svg";
    document.querySelector(".playPause").textContent = "Play";
  } else {
    loop();
    animation = true;
    document.getElementById("playpausebutton").src = "images/bluepausedull.svg";
    document.querySelector(".playPause").textContent = "Pause";
  }
}



function updateContent() {


  if (page === 0) {
 

    $('#variables1').css({
      "opacity": 0.5,
      "pointer-events": "none"
    });
    $('#Results1').css({
      "opacity": 1,
      "pointer-events": "auto"
    });
    document.getElementById('Results').style.display = "block";
    document.getElementById('playpausebutton').style.display = "none";
    $(".playPause").css("display","none");
    page0=true;
    page1=false;
    page2=false;
    page3=false;
    runPage0();
    // console.log("hello page one")
    document.querySelector(".graph-two").classList.remove("display-hide");
    document.querySelector(".graph-one").classList.add("display-hide");
    document.querySelector(".graph-div span").textContent = "Next";
    document.getElementById('variables').style.display = "none";

    $('#p1, #p2, #p3,#p4,#p5,#p6').each(function() {
      // Perform actions on each element
      $(this).css('display', 'block');

  });
  $('#p7, #p8, #p9,#p10').each(function() {
   
    $(this).css('display', 'none');
});
    
document.getElementById("taskResult").innerHTML= "Description";
  document.getElementById("taskResult1").innerHTML= "Description";



  } else if (page === 1) {

    $('#variables1').css({
      "opacity": 1,
      "pointer-events": "auto"
    });
    $('#Results1').css({
      "opacity": 1,
      "pointer-events": "auto"
    });
    $("#Results").css("width","100%");
    document.getElementById('Results').style.display = "block";

    document.getElementById('variables').style.display = "block";
    document.getElementById('playpausebutton').style.display = "block";
    $(".playPause").css("display","block");
    page = 1;
    document.querySelector(".graph-one").classList.remove("display-hide");
    document.querySelector(".graph-two").classList.remove("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev/Next";
    $('#p1, #p2, #p3,#p4,#p5,#p6').each(function() {
 
      $(this).css('display', 'none');
  });
  $('#p7, #p8, #p9,#p10').each(function() {
   
    $(this).css('display', 'block');
});
document.getElementById("taskResult").innerHTML= "Result";
document.getElementById("taskResult1").innerHTML= "Result";
   
    page0=false;
    page1=true;
    page2=false;
    page3=false;
    runPage1();
   

  }else if (page === 2) {
    $('#variables1').css({
      "opacity": 1,
      "pointer-events": "auto"
    });
    $('#Results1').css({
      "opacity": 0.5,
      "pointer-events": "none"
    });
    document.getElementById('Results').style.display = "none";
    document.getElementById('variables').style.display = "block";
    document.getElementById('playpausebutton').style.display = "none";
    $(".playPause").css("display","none");
    $('#p1, #p2, #p3,#p4,#p5,#p6').each(function() {
    
      $(this).css('display', 'none');
  });
  $('#p7, #p8, #p9,#p10').each(function() {
   
    $(this).css('display', 'none');
});
    page0=false;
    page1=false;
    page2=true;
    page3=false;
    runPage2();
    document.querySelector(".graph-one").classList.remove("display-hide");
    document.querySelector(".graph-two").classList.remove("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev/Next";
  } 

  
   else if (page === 3) {
    $('#variables1').css({
      "opacity": 1,
      "pointer-events": "auto"
    });
    $('#Results1').css({
      "opacity": 0.5,
      "pointer-events": "none"
    });
    let colors = color("#089b93");
    document.getElementById('Results').style.display = "none";
    document.getElementById('variables').style.display = "block";
    document.getElementById('playpausebutton').style.display = "none";
    $(".playPause").css("display","none");
    $('#p1, #p2, #p3,#p4,#p5,#p6').each(function() {
   
      $(this).css('display', 'none');
  });
  $('#p7, #p8, #p9,#p10').each(function() {
   
    $(this).css('display', 'none');
});
    page0=false;
    page1=false;
    page2=false;
    page3=true;
    runPage3();
    document.querySelector(".graph-one").classList.remove("display-hide");
    document.querySelector(".graph-two").classList.add("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev";
  } 


}


function changePage(direction) {
  page += direction;
  updateContent();
}


updateContent();


$(window).resize(function() {
  updateContent();
});
