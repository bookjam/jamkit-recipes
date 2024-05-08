const _playlist = [
    "Fpmqa_ldQS0",
    "f1Lub6eVt_s",
    "WwEFzX6CffQ",
    "ZZlDRJuU1V8",
    "7FsnUWarNsw",
    "yq2YzBY06LQ",
    "vYd4NU7O6_g",
];

var _prepared_video = {};
var _playing_page = 0;

function feed_videos(keyword, location, length, sortkey, sortorder, handler) {
    handler(_playlist.map((value, index) => {
        return {
            "id": `videos.${index + 1}`,
            "page": `${index + 1}`,
            "video-id": value
        }
    }));

    if (location === 0) {
        [ 1, 2 ].forEach((page) => {
            _prepare_video(page);
        });
    }

    _play_video(_playing_page = 1);
}

function on_paging_done(params) {
    const page = parseInt(params["page"]);
    
    console.log(`paging:   ${page} ${Date.now() / 1000}`);

    if (page !== _playing_page) {
        _stop_video(_playing_page);
        _play_video(page);

        if (page > _playing_page) {
            if (page < _playlist.length) {
                _prepare_video(page + 1);
            }
        } else {
            if (page > 1) {
                _prepare_video(page - 1);
            }
        }
    }

    _playing_page = page;
}

function on_video_playing(params) {
    const player = parseInt(params["id"].replace("youtube.", ""));
    const page = _prepared_video[player];

    _hide_poster_image(page);
}

function on_video_finished(params) {
    const player = parseInt(params["id"].replace("youtube.", ""));
    const page = _prepared_video[player];

    _stop_video(page);
    _move_to_next_page();
}

function _prepare_video(page) {
    const player = _get_player_number(page);

    console.log(`prepare:  ${page}(${player}) ${Date.now() / 1000}`);

    if (_prepared_video[player] !== page && _playlist.length > page - 1) {
        view.object(`youtube.${player}`).property({
            "video-id": _playlist[page - 1]
        });
    
        _prepared_video[player] = page;
    }

    _get_video_cell(page, (cell) => {
        cell.center(`youtube.${player}`, null, { 
            "add-as-child": "yes",
            "send-to-back": "yes" 
        });
    });
}

function _play_video(page) {
    const player = _get_player_number(page);

    console.log(`play:     ${page} ${Date.now() / 1000}`);

    if (_prepared_video[player] !== page) {
        _prepare_video(page);
    }

    view.object(`youtube.${player}`).action("play");
}

function _stop_video(page) {
    const player = _get_player_number(page);

    console.log(`stop:     ${page} ${Date.now() / 1000}`);

    if (_prepared_video[player] === page) {
        view.object(`youtube.${player}`).action("pause");
        view.object(`youtube.${player}`).action("seek", { "time": "0" });
    }
}

function _move_to_next_page() {
    view.object("showcase.videos").action("next-page");
}

function _hide_poster_image(page) {
    view.object(`img.${page}`).action("hide");
}

function _get_player_number(page) {
    return ((page - 1) % 3) + 1;
}

function _get_video_cell(page, handler) {
    const cell = view.object("showcase.videos").view("cell", `videos.${page}`);

    if (!cell) {
        timeout(0.01, () => {
            _get_video_cell(page, handler)
        });
    } else {
        handler(cell);
    }
}
