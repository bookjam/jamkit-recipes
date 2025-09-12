const _playlist = [
    "Fpmqa_ldQS0",
    "f1Lub6eVt_s",
    "WwEFzX6CffQ",
    "ZZlDRJuU1V8",
    "7FsnUWarNsw",
    "yq2YzBY06LQ",
    "vYd4NU7O6_g",
];

let _preparedVideo = {};
let _playingPage = 0;

function feedVideos(keyword, location, length, sortkey, sortorder, handler) {
    handler(_playlist.map((value, index) => {
        return {
            "id": `videos.${index + 1}`,
            "page": `${index + 1}`,
            "video-id": value
        }
    }));

    if (location === 0) {
        [ 1, 2 ].forEach((page) => {
            _prepareVideo(page);
        });
    }

    _playVideo(_playingPage = 1);
}

function onPagingDone(params) {
    const page = parseInt(params["page"]);
    
    console.log(`paging:   ${page} ${Date.now() / 1000}`);

    if (page !== _playingPage) {
        _stopVideo(_playingPage);
        _playVideo(page);

        if (page > _playingPage) {
            if (page < _playlist.length) {
                _prepareVideo(page + 1);
            }
        } else {
            if (page > 1) {
                _prepareVideo(page - 1);
            }
        }
    }

    _playingPage = page;
}

function onVideoPlaying(params) {
    const player = parseInt(params["id"].replace("youtube.", ""));
    const page = _preparedVideo[player];

    _hidePosterImage(page);
}

function onVideoFinished(params) {
    const player = parseInt(params["id"].replace("youtube.", ""));
    const page = _preparedVideo[player];

    _stopVideo(page);
    _moveToNextPage();
}

function _prepareVideo(page) {
    const player = _getPlayerNumber(page);

    console.log(`prepare:  ${page}(${player}) ${Date.now() / 1000}`);

    if (_preparedVideo[player] !== page && _playlist.length > page - 1) {
        view.object(`youtube.${player}`).property({
            "video-id": _playlist[page - 1]
        });
    
        _preparedVideo[player] = page;
    }

    _getVideoCell(page, (cell) => {
        cell.center(`youtube.${player}`, null, { 
            "add-as-child": "yes",
            "send-to-back": "yes" 
        });
    });
}

function _playVideo(page) {
    const player = _getPlayerNumber(page);

    console.log(`play:     ${page} ${Date.now() / 1000}`);

    if (_preparedVideo[player] !== page) {
        _prepareVideo(page);
    }

    view.object(`youtube.${player}`).action("play");
}

function _stopVideo(page) {
    const player = _getPlayerNumber(page);

    console.log(`stop:     ${page} ${Date.now() / 1000}`);

    if (_preparedVideo[player] === page) {
        view.object(`youtube.${player}`).action("pause");
        view.object(`youtube.${player}`).action("seek", { "time": "0" });
    }
}

function _moveToNextPage() {
    view.object("showcase.videos").action("next-page");
}

function _hidePosterImage(page) {
    view.object(`img.${page}`).action("hide");
}

function _getPlayerNumber(page) {
    return ((page - 1) % 3) + 1;
}

function _getVideoCell(page, handler) {
    const cell = view.object("showcase.videos").view("cell", `videos.${page}`);

    if (!cell) {
        timeout(0.01, () => {
            _getVideoCell(page, handler)
        });
    } else {
        handler(cell);
    }
}
