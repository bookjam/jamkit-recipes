function on_loaded() {
    pubsub.subscribe("main-event", function(event, { count }) {
        console.log(`${$env["SUBVIEW"]} event received: ${event}, count = ${count}`);
    });
}
