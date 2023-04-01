function change_to_fill() {
    view.object("video").property({
        "scale-mode": "fill"
    });
}

function change_to_fit() {
    view.object("video").property({
        "scale-mode": "fit"
    });
}

function change_to_scale() {
    view.object("video").property({
        "scale-mode": "scale"
    });
}
