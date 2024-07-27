const _playlist = [
    "pSUydWEqKwE",
    "js1CtxSY38I",
    "zsYSSVoQnP4",
    "dJdqn5v4Dkw",
    "ArmDp-zijuc"
];
var _current_video_index = 0;

function on_loaded() {
    _play_video_at_index(0);
}

function on_video_finished() {
    _play_video_at_index(_get_next_video_index());
}

function next() {
    _play_video_at_index(_get_next_video_index());
}

function prev() {
    _play_video_at_index(_get_prev_video_index());
}

function _play_video_at_index(index) {
    _current_video_index = index;
    
    view.object("youtube").property({ 
        "video-id": _playlist[_current_video_index]
    });
    view.object("youtube").action("play");
}

function _get_next_video_index() {
    var next_video_index = _current_video_index + 1;

    if (next_video_index >= _playlist.length) {
        next_video_index = 0;
    }

    return next_video_index;
}

function _get_prev_video_index() {
    var prev_video_index = _current_video_index - 1;

    if (prev_video_index < 0) {
        prev_video_index = _playlist.length - 1;
    }

    return prev_video_index;
}
