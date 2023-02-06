function on_video_playing() {
    view.object("timer").action("start");
}

function on_video_paused() {
    view.object("timer").action("pause");
}

function on_timer_expired() {
    view.object("youtube").action("stop");
}
