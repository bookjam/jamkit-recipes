function parse_url(params) {
    var url = parse("url", params["url"]);

    view.object("sbml.info").action("load", {
        "filename": "url_info.sbml",
        "scheme": url.scheme,
        "host": url.host || "N/A",
        "path": url.path || "N/A",
        "query": url.query || "N/A",
        "string": url.string() // This is not a propery
    });
}
