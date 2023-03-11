function generate(data) {
    view.object("sbml.button").action("load", {
        "filename": "button.sbml",
        "enabled": data["enabled"],
        "selected": data["selected"],
    })
}

function show_info() {

}
