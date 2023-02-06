function on_timer_expired() {
    controller.action("alert", {
        "message": controller.catalog().string("Timer expired")
    });
}
