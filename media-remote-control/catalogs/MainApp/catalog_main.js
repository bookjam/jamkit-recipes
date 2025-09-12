const _playlist = [
    "pSUydWEqKwE",
    "js1CtxSY38I",
    "zsYSSVoQnP4",
    "dJdqn5v4Dkw",
    "ArmDp-zijuc"
];
let _currentVideoIndex = 0;

function onLoaded() {
    _playVideoAtIndex(0);
}

function onVideoFinished() {
    _playVideoAtIndex(_getNextVideoIndex());
}

function onMediaControlPlay() {
    view.object("youtube").action("play");
}

function onMediaControlPause() {
    view.object("youtube").action("pause");
}

function onMediaControlNext() {
    _playVideoAtIndex(_getNextVideoIndex());
}

function onMediaControlPrev() {
    _playVideoAtIndex(_getPrevVideoIndex());
}

function onMediaControlSeek(params) {
    view.object("youtube").action("seek", { "time": params["time"] });
}

function next() {
    _playVideoAtIndex(_getNextVideoIndex());
}

function prev() {
    _playVideoAtIndex(_getPrevVideoIndex());
}

function _playVideoAtIndex(index) {
    _currentVideoIndex = index;
    
    view.object("youtube").property({ 
        "video-id": _playlist[_currentVideoIndex]
    });
    view.object("youtube").action("play");
}

function _getNextVideoIndex() {
    let nextVideoIndex = _currentVideoIndex + 1;

    if (nextVideoIndex >= _playlist.length) {
        nextVideoIndex = 0;
    }

    return nextVideoIndex;
}

function _getPrevVideoIndex() {
    let prevVideoIndex = _currentVideoIndex - 1;

    if (prevVideoIndex < 0) {
        prevVideoIndex = _playlist.length - 1;
    }

    return prevVideoIndex;
}
