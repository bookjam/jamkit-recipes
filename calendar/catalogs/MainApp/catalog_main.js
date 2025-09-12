function changeCalendarMode({ mode }) {
    view.data("display-unit", {
        "calendar-mode": mode
    });
    view.action("reload");
}
