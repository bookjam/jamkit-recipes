function on_loaded() {
    controller.action("script", {
        "subview": "__MAIN__",
        "script": "call",
        "routes-to-topmost": "no",
        "return-context": $env["CONTEXT"],
        "return-script": "callback"
    });
}

function callback() {
    console.log("callback is executed.");

    timeout(2, function() {
        controller.action("script", {
            "subview": "__MAIN__",
            "script": "call",
            "routes-to-topmost": "no",
            "return-context": $env["CONTEXT"],
            "return-script": "callback"
        });
    });
}
