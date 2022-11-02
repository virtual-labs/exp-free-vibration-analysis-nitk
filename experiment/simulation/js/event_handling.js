function handleEvents() {
  // console.log(mouseX, mouseY)

  if (button0.in(mouseX, mouseY) && page0) {
    page0 = false;
    page1 = true;

    //magFac1.initialise();
  }
  if (button6.in(mouseX, mouseY) && page1) {
    page1 = false;
    page0 = true;
    x1.remove();
    x2.remove();
    k1.remove();
    m1.remove();
    k2.remove();
    m2.remove();
    //magFac1.initialise();
  }

  if (button1.in(mouseX, mouseY) && page1) {
    if (animation) {
      noLoop();
      button1.icon = play;
      button1.draw();
      animation = false;
      touch = true;
    } else {
      loop();
      button1.icon = pause;
      button1.draw();
      animation = true;
      touch = false;
    }
  }
  if (button2.in(mouseX, mouseY) && page1) {
    position_graph1.delete();
    position_graph2.delete();
    page1 = false;
    page2 = true;

    //magFac1.initialise();
  }
  if (button3.in(mouseX, mouseY) && page2) {
    position_graph1.delete();
    position_graph2.delete();
    page1 = true;
    page2 = false;
  }

  if (button4.in(mouseX, mouseY) && page2) {
    position_graph1.delete();
    position_graph2.delete();
    page3 = true;
    page2 = false;

    //magFac2.initialise();
  }

  if (button5.in(mouseX, mouseY) && page3) {
    position_graph1.delete();
    position_graph2.delete();
    page2 = true;
    page3 = false;
    //magFac1.initialise();
  }
}
