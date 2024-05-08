function generate(data) {
    view.object("sbml.slider").action("load", Object.assign({}, data, {
        "filename": "slider.sbml",
    }));
}
