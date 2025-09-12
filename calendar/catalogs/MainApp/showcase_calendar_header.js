function goToday() {
    owner.action("today");
}

function goPrev() {
    owner.action("prev");
}

function goNext() {
    owner.action("next");
}

function changeMode({ mode }) {
    owner.action("script", {
        "script": "changeCalendarMode",
        "mode": mode
    });
}
