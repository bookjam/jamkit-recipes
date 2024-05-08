const impact = controller.module("impact-vibrator");

function heavy() {
    impact.generate("heavy");
}

function medium() {
    impact.generate("medium");
}

function light() {
    impact.generate("light");
}

function soft() {
    impact.generate("soft");
}

function rigid() {
    impact.generate("rigid");
}
