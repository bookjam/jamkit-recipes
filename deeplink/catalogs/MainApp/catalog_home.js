
function action_myscript(params) {
    controller.action("link", {
        "url": "x-bookjam-" + $data["HOST_APP_ID"] + "://app?script=deeplink&message=deeplink"
    })
}

function action_myscript_with_subview(params) {
    controller.action("link", {
        "url": "jamkit://app?script=deeplink&subview=V_HOME&message=\"deeplink with subview\""
    })
}

function deeplink(params) {
    controller.action("toast", {message: "message is " + params["message"]});
}