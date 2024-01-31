const _video_playlist = [
    "pSUydWEqKwE",
    "js1CtxSY38I",
    "zsYSSVoQnP4",
    "dJdqn5v4Dkw",
    "ArmDp-zijuc"
];
var _next_video_index = 0;
var _current_player_number = 1;

function on_loaded() {
    _play_video_at_index(0);
}

function on_video_finished() {
    _play_next_video();
}

function next() {
    _play_next_video();
}

function _play_video_at_index(index) {
    const current_player_number = _current_player_number;
    const next_player_number = _current_player_number % 2 + 1;

    _next_video_index = index;

    view.object(`youtube.${current_player_number}`).property({ 
        "video-id": _get_next_video_id(),
        "hidden": "no"
    });
    view.object(`youtube.${current_player_number}`).action("play");

    view.object(`youtube.${next_player_number}`).property({ 
        "video-id": _get_next_video_id(),
        "hidden": "yes"
    });
}

function _play_next_video() {
    const current_player_number = _current_player_number;
    const next_player_number = _current_player_number % 2 + 1;

    view.object(`youtube.${next_player_number}`).action("play");
    view.object(`youtube.${next_player_number}`).property({ 
        "hidden": "no"
    });

    view.object(`youtube.${current_player_number}`).property({ 
        "video-id": _get_next_video_id(),
        "hidden": "yes"
    });

    _current_player_number = next_player_number;
}

function _get_next_video_id() {
    const next_video_id = _video_playlist[_next_video_index];

    _next_video_index = _next_video_index + 1;

    if (_next_video_index >= _video_playlist.length) {
        _next_video_index = 0;
    }

    return next_video_id;
}
