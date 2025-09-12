function onTimerExpired() {
    controller.action("alert", {
        "message": controller.catalog().string("Timer expired")
    });
}
