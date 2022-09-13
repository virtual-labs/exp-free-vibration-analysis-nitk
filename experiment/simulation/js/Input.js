class NumberInput {
    constructor(x, y, label, min, max, iniVal, change,fine_change, ifSlider) {
        this.x = x;
        this.y = y;
        this.label = label;
        this.min = min;
        this.max = max;
        this.iniVal = iniVal;
        this.ifSlider = ifSlider;
        this.inp=this.iniVal
        this.w = 160;
        this.initialised = true;
        this.input1;
        this.input2;
        this.change = change;
        this.fine_change=fine_change;
    }

initialise() {
        if (this.initialised) {
            this.input1 = createInput(this.inp);
            this.input1.size(60, 20);
            this.input1.position(this.x + this.w - 60, this.y-15);

            this.input1.elt.setAttribute("type", "number");
            this.input1.elt.setAttribute("min", this.min.toString());
            this.input1.elt.setAttribute("max", this.max.toString());
            this.input1.elt.setAttribute("step", this.change.toString());
            this.input1.elt.setAttribute("value", this.iniVal.toString());

            if (this.ifSlider) {
                this.input2 = createSlider(this.min, this.max, this.inp, this.change);
                this.input2.size(this.w, 5);
                this.input2.position(this.x, this.y+8);
                this.input2.elt.style.position = "absolute";

                this.input2.elt.setAttribute("class", "slider");
            }
            this.initialised = false;
        }
    }

    remove() {
        this.input1.remove();
        if (this.ifSlider) {
            this.input2.remove();
        }
        this.initialised = true;
    }

    draw() {
        this.initialise();

        if (this.inp != this.input1.value()) {
            position_graph1.delete();
            position_graph2.delete();
            this.inp = this.input1.value();
            if (this.ifSlider) {
                this.input2.value(this.inp);
            }
        }

        if (this.ifSlider) {
            
            if (this.inp != this.input2.value()) {
                //position_graph1.delete();
                //position_graph2.delete();
                this.inp = this.input2.value();
                this.input1.value(this.inp);
            }
        }

        push();

        fill(0, 0, 0, 255);
        strokeWeight(0);
        textFont("Comic Sans MS")
        textSize(16);
        text(this.label, this.x - 10, this.y - 10);

        pop();
    }
}
