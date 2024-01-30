var _event_subscribed = false;

function subscribe() {
    if (!_event_subscribed) {
        pubsub.subscribe("main-event", function(event, { count }) {
            console.log(`${$data["id"]} event received: ${event}, count = ${count}`);
        });

        controller.action("toast", {
            "message": controller.catalog().string("Event has been subscribed.")
        });
    }

    _event_subscribed = true;
}

function unsubscribe() {
    if (_event_subscribed) {
        pubsub.unsubscribe("main-event");

        controller.action("toast", {
            "message": controller.catalog().string("Event subscription has been canceled.")
        });
    }

    _event_subscribed = false;
}
