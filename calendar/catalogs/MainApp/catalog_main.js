function change_calendar_mode({ mode }) {
    view.data("display-unit", {
        "calendar-mode": mode
    });
    view.action("reload");
}
