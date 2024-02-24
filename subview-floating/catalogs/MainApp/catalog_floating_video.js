function on_media_control_play() {
    view.object("youtube").action("play");
}

function on_media_control_pause() {
    view.object("youtube").action("pause");
}

function on_media_control_seek(params) {
    view.object("youtube").action("seek", { "time": params["time"] });
}
