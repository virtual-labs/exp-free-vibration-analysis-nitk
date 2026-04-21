function runPage3() {
  document.querySelector("#observations").style.display = "none";
  document.querySelector("#canvas-container").style.display = "block";
  background(255);
  // image(bg, 0, 0);

  stroke(0);
  fill(0);

  push();
  strokeWeight(1);
  textSize(36);

  textSize(16);

  pop();

  textSize(15);
  text("X\u2081", 20, 200);
  text("X\u2082", 20, 300);
  strokeWeight(0.5);
  line(45, 200, 590, 200);
  line(45, 300, 590, 300);

  if (spring1.x1 == spring1.x2) {
    textFont("nunito");
    textSize(20);
    text("MODE SHAPE", 250, 50);
    textSize(15);
    text(
      "When the initial excitation is given same to both masses in same direction, it",
      30,
      70
    );
    text("gives only the first mode shape of the system", 150, 90);
    strokeWeight(1.5);
    stroke(0);
    line(300, 100, 300, 400);
    stroke(0, 0, 255);
    line(300, 200, 300 + spring1.ar1 * spring1.x2 * 2, 200);
    line(300, 300, 300 + spring1.x2 * 2, 300);
    stroke(255, 0, 0);
    line(300, 100, 300 + spring1.ar1 * spring1.x2 * 2, 200);
    line(300 + spring1.ar1 * spring1.x2 * 2, 200, 300 + spring1.x2 * 2, 300);
    line(300 + spring1.x2 * 2, 300, 300, 400);

    // if(spring1.ar1.toFixed(4) * spring1.x2.toFixed(4)+spring1.w1.toFixed(4) <= -58 ||  ){

    // }
  } else if (spring1.x1 == -spring1.x2) {
    textFont("nunito");
    textSize(20);
    text("MODE SHAPE", 250, 50);
    textSize(15);
    text(
      "When the initial excitation is given same to both masses in different direction, it",
      30,
      7
    );
    text("gives only the second mode shape of the system", 150, 90);
    strokeWeight(2);
    stroke(0);
    line(300, 100, 300, 400);
    stroke(0, 0, 255);
    line(300, 200, 300 + spring1.ar2 * spring1.x2 * 2, 200);
    line(300, 300, 300 + spring1.x2 * 2, 300);
    stroke(255, 0, 0);
    line(300, 100, 300 + spring1.ar2 * spring1.x2 * 2, 200);
    line(300 + spring1.ar2 * spring1.x2 * 2, 200, 300 + spring1.x2 * 2, 300);
    line(300 + spring1.x2 * 2, 300, 300, 400);
  } else {
    textFont("nunito");
    textSize(20);
    text("MODE SHAPES", 215, 50);
    textSize(15);
    text("FIRST MODE SHAPE", 90, 90);
    text("SECOND MODE SHAPE", 370, 90);

    strokeWeight(3);
    stroke(0);
    line(120, 100, 120, 400);
    stroke(0, 0, 255);
    line(120, 200, 120 + spring1.x1d * 2, 200);
    line(120, 300, 120 + spring1.x2d * 2, 300);
    stroke(255, 0, 0);
    line(120, 100, 120 + spring1.x1d * 2, 200);
    line(120 + spring1.x1d * 2, 200, 120 + spring1.x2d * 2, 300);
    line(120 + spring1.x2d * 2, 300, 120, 400);

    strokeWeight(3);
    stroke(0);
    line(400, 100, 400, 400);
    stroke(0, 0, 255);
    line(400, 200, 400 + spring1.x1dd * 2, 200);
    line(400, 300, 400 + spring1.x2dd * 2, 300);
    stroke(255, 0, 0);
    line(400, 100, 400 + spring1.x1dd * 2, 200);
    line(400 + spring1.x1dd * 2, 200, 400 + spring1.x2dd * 2, 300);
    line(400 + spring1.x2dd * 2, 300, 400, 400);

    if (spring1.x1d.toFixed(4) < -60 || spring1.x2d.toFixed(4) < -60) {
      textFont("nunito");
      textSize(11);
      stroke(0);
      strokeWeight(0.5);
      text(
        "Warning:The system is reaching resonance, so the MODE SHAPE will get enlarged beyond slide.",
        60,
        440
      );
    }
    if (spring1.x1dd.toFixed(4) < -100 || spring1.x2dd.toFixed(4) < -100) {
      textFont("nunito");
      textSize(11);
      stroke(0);
      strokeWeight(0.5);
      text(
        "Warning:The system is reaching resonance, so the MODE SHAPE will get enlarged beyond slide.",
        60,
        440
      );
    }
  }

  strokeWeight(1);
  spring1.initialise(x1, x2, k1, m1, k2, m2);
  spring1.update(t, factor);

  x1 = $("#Xo1Spinner").spinner("value");
  x2 = $("#Xo2Spinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");
  t = t + dt;

  //clear.mousePressed(clearMe);
  function adjustCommentsWidth() {
    if ($(window).width() < 944) {
      $("#variables").css("width", "100%");
    } else {
      $("#variables").css("width", "200%");
    }
  }

  adjustCommentsWidth();

  $(window).resize(adjustCommentsWidth);
}
