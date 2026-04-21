let x1,x2,k1,k2,m1,m2;

function varinit() {
  varchange();
  $("#Xo1Slider").slider("value", 0.016);
  $("#Xo1Spinner").spinner("value", 0.016);

  $("#Xo2Slider").slider("value", 0.016);
  $("#Xo2Spinner").spinner("value", 0.016);

  $("#k1Slider").slider("value", 500);
  $("#k1Spinner").spinner("value", 500);

  $("#m1Slider").slider("value", 10);
  $("#m1Spinner").spinner("value", 10);

  $("#k2Slider").slider("value", 500);
  $("#k2Spinner").spinner("value", 500);

  $("#m2Slider").slider("value", 10);
  $("#m2Spinner").spinner("value", 10);
}

// Initialise and Monitor variable containing user inputs of system parameters.
//change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
function varchange() {
  //Variable stiffness slider and number input types
  $("#Xo1Slider").slider({ max: 0.03, min: -0.03, step: 0.001 }); // slider initialisation : jQuery widget
  $("#Xo1Spinner").spinner({ max: 0.03, min: -0.03, step: 0.001 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#Xo1Slider").on("slide", function (e, ui) {
    $("#Xo1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#Xo1Spinner").on("spin", function (e, ui) {
    $("#Xo1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#Xo1Spinner").on("change", function () {
    varchange();
  });

  //Variable mass slider and number input types
  $("#Xo2Slider").slider({ max: 0.03, min: -0.03, step: 0.001 }); // slider initialisation : jQuery widget
  $("#Xo2Spinner").spinner({ max: 0.03, min: -0.03, step: 0.001 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#Xo2Slider").on("slide", function (e, ui) {
    $("#Xo2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#Xo2Spinner").on("spin", function (e, ui) {
    $("#Xo2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#Xo2Spinner").on("change", function () {
    varchange();
  });

  //Variable damping slider and number input types
  $("#k1Slider").slider({ max: 2000, min: 500, step: 2}); // slider initialisation : jQuery widget
  $("#k1Spinner").spinner({ max: 2000, min: 500, step: 2}); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k1Slider").on("slide", function (e, ui) {
    $("#k1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("spin", function (e, ui) {
    $("#k1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("change", function () {
    varchange();
  });

  //Variable magnitude slider and number input types
  $("#m1Slider").slider({ max: 50, min: 10, step: 1 }); // slider initialisation : jQuery widget
  $("#m1Spinner").spinner({ max: 50, min: 10, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#m1Slider").on("slide", function (e, ui) {
    $("#m1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Slider").on("spin", function (e, ui) {
    $("#m1Spinner").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Spinner").on("change", function () {
    varchange();
  });

  //Variable frequency slider and number input types
  $("#k2Slider").slider({ max: 2000, min: 500, step: 2 }); // slider initialisation : jQuery widget
  $("#k2Spinner").spinner({ max: 2000, min: 500, step: 2 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k2Slider").on("slide", function (e, ui) {
    $("#k2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("spin touchstart", function (e, ui) {
    $("#k2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  
  $("#k2Spinner").on("change", function () {
    varchange();
  });
 
  //Variable frequency slider and number input types
  $("#m2Slider").slider({ max: 50, min: 10, step: 1}); // slider initialisation : jQuery widget
  $("#m2Spinner").spinner({ max: 50, min: 10, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#m2Slider").on("slide", function (e, ui) {
    $("#m2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2Spinner").on("spin touchstart", function (e, ui) {
    $("#m2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  
  $("#m2Spinner").on("change", function () {
    varchange();
  });
 

 
  varupdate();
}

function varupdate() {
  $("#Xo1Slider").slider(
    "value",
    $("#Xo1Spinner").spinner("value")
  );
  $("#Xo2Slider").slider("value", $("#Xo2Spinner").spinner("value"));
  $("#k1Slider").slider("value", $("#k1Spinner").spinner("value"));
  $("#m1Slider").slider(
    "value",
    $("#m1Spinner").spinner("value")
  );
  $("#k2Slider").slider(
    "value",
    $("#k2Spinner").spinner("value")
  );

  $("#m2Slider").slider(
    "value",
    $("#m2Spinner").spinner("value")
  );
  x1 = $("#Xo1Spinner").spinner("value");
  x2 = $("#Xo2Spinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1= $("#m1Spinner").spinner("value");
  k2= $("#k2Spinner").spinner("value");
  m2= $("#m2Spinner").spinner("value");




}
function movetoTop() {

  const firstDiv = document.querySelector("#simulation");
  if (firstDiv) {
      firstDiv.scrollIntoView({ behavior: "smooth" });
  }
}