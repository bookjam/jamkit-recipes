function generate(data) {
    view.object("sbml.progress").action("load", Object.assign({}, data, {
        "filename": "progress.sbml",
    }));
}
