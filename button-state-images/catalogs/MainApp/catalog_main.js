function generate(data) {
    view.object("sbml.button").action("load", Object.assign({}, data, {
        "filename": "button.sbml",
    }));
}

function show_info() {

}
