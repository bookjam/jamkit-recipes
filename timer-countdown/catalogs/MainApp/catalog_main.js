function on_timer_expired() {
    controller.action("alert", {
        "message": "Timer expired"
    });
}
