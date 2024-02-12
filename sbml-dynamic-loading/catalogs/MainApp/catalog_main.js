function on_loaded() {
    if ($data["loaded"] !== "yes") {
        Promise.all([
            [ "Hanyeol",  "1st" ],
            [ "Hyunjung", "2nd" ],
            [ "Hakyong",  "3rd" ],
            [ "Haeun",    "4th" ],
        ].map(([ name, nth ]) => {
            return read("catalog", "message.sbml.tmpl", {
                "name": name,
                "nth": nth
            });
        }))
            .then((messages) => {
                view.data("display-unit", {
                    "messages": messages.join("\n"),
                    "loaded": "yes"
                });
                view.action("reload");        
            });
    }
}
