function generate(data) {
    view.object("sbml.button").action("load", Object.assign({}, data, {
        "filename": "button.sbml",
    }));
}

function wait() {
    view.object("btn.example").action("wait");
}

function done() {
    view.object("btn.example").action("wait-done");
}

function show_info() {

}
