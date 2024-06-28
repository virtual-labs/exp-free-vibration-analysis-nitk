function runPage1() {
  background(255);
  // image(bg, 0, 0);
  stroke(0);
  fill(0);

  push();
  textSize(36);

  textSize(16);

  pop();

  push();
  stroke(0, 100);
  for (let i = 20; i < 591; i++) {
    point(i, 480);
    i += 2;
  }
  for (let i = 480; i < 570; i++) {
    point(300, i);
    i += 2;
  }
  pop();

  position_graph1.update(spring1.y1);
  position_graph1.draw(255, 0, 0);

  position_graph2.update(spring1.y2);
  position_graph2.draw(255, 0, 0);

  strokeWeight(0);

  if (x1.inp != 0 || x2.inp != 0) {
    textSize(14);
    textFont("nunito  ");
    fill(231, 114, 43);

    //
    document.querySelector("#w1").textContent =
      +spring1.w1.toFixed(4) + " rad/s";
    document.querySelector("#w2").textContent =
      +spring1.w2.toFixed(4) + " rad/s";
    document.querySelector("#m1").textContent = +spring1.ar1.toFixed(4);
    document.querySelector("#m2").textContent = +spring1.ar2.toFixed(4);
  }

  spring1.initialise(x1, x2, k1, m1, k2, m2);
  spring1.update(t, factor);
  spring1.show(0, 1, 0);
  strokeWeight(0.5);

  line(
    spring1.masscoordinates[0],
    spring1.masscoordinates[1],
    position_graph1.graphend[0],
    position_graph1.graphend[1]
  );
  line(
    spring1.masscoordinates[2],
    spring1.masscoordinates[3],
    position_graph2.graphend[0],
    position_graph2.graphend[1]
  );

  fill(0, 0, 0);
  textSize(20);
  text("Free Vibration System", 115, 110);

  x1 = $("#Xo1Spinner").spinner("value");
  x2 = $("#Xo2Spinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");
  if (spring1.x1d.toFixed(4) < -60 || spring1.x2d.toFixed(4) < -60) {
    textFont("nunito");
    textSize(11);
    stroke(0);
    strokeWeight(0.5);
    text(
      "Warning:The solution goes out of bounds as it's reaching the resonance.",
      100,
      440
    );
  }
  if (spring1.x1dd.toFixed(4) < -100 || spring1.x2dd.toFixed(4) < -100) {
    textFont("nunito");
    textSize(11);
    stroke(0);
    strokeWeight(0.5);
    text(
      "Warning:The solution goes out of bounds as it's reaching the resonance.",
      100,
      440
    );
  }
  document.getElementById("taskResult").innerHTML = "Result";
  document.getElementById("taskResult1").innerHTML = "Result";
  document.getElementById('Title-results').title = 'Result';

  t = t + dt;
  // $("#var-top").css("left","45.5rem");
  // $("#res-top").css("display","none");
  function adjustCommentsWidth() {
    if ($(window).width() < 944) {
      $("#variables").css("width", "100%");
    } else {
      $("#variables").css("width", "100%");
    }
    if ($(window).width() < 944) {
      $("#Results").css("width", "100%");
    } else {
      $("#Results").css("width", "100%");
    }
  }

  adjustCommentsWidth();

  $(window).resize(adjustCommentsWidth);
}
