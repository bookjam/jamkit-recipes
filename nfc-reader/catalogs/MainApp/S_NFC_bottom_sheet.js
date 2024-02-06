const nfc = controller.module("nfc-reader");

function on_loaded() {
    if (nfc.available()) {
        nfc.read(([ message ]) => {
            if (message.count() > 0) {
                console.log(message.uri(0));
            }
        });
    } else {
        controller.action("toast", {
            "message": controller.catalog().string("NFC is not available")
        });
    }
}
