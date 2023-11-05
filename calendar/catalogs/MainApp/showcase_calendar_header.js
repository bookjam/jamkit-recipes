function go_today() {
    owner.action("today");
}

function go_prev() {
    owner.action("prev");
}

function go_next() {
    owner.action("next");
}

function change_mode({ mode }) {
    owner.action("script", {
        "script": "change_calendar_mode",
        "mode": mode
    });
}
