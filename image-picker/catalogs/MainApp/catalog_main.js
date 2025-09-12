function pickImage() {
    controller.action("pick", {
        "media": "image",
        "script-when-done": "on_pickImage"
    })
}

function onPickImage(params) {
    view.object("image").data("image", params["image"]);
}
