function call(params) {
    console.log("call is executed.");

    timeout(2, function() {
        controller.action("script", {
            "context": params["return-context"],
            "script": params["return-script"],
            "routes-to-topmost": "no"
        });
    });
}
