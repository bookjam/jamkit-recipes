function generate(data) {
    view.object("sbml.textfield").action("load", Object.assign({}, data, {
        "filename": "textfield.sbml",
    }));
}
