function parse_url(params) {
    var url = parse("url", params["url"]);

    view.object("sbml.info").action("load", {
        "filename": "url_info.sbml",
        "scheme": url.scheme,
        "host": url.host,
        "path": url.path,
        "query": url.query,
        "string": url.string() // This is not a propery
    });
}
