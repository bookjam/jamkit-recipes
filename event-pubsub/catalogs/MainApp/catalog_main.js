function onLoaded() {
    _publish_event(0);
}

function _publish_event(count) {
    pubsub.publish("main-event", { "count": count });

    timeout(2, function() {
        _publish_event(count + 1);
    });
}
