function pick_image() {
    controller.action("pick", {
        "media": "image",
        "script-when-done": "on_pick_image"
    })
}

function on_pick_image(params) {
    view.object("image").data("image", params["image"]);
}
