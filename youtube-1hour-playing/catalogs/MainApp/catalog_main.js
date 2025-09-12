function onVideoPlaying() {
    view.object("timer").action("start");
}

function onVideoPaused() {
    view.object("timer").action("pause");
}

function onTimerExpired() {
    view.object("youtube").action("stop");
}
