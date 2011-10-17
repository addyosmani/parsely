/*
* parsley - a comprehensive URL parser
* author: Addy Osmani
* notes: inspired by work from Steven Levithan
* Copyright (c) 2011 Addy Osmani
* Dual MIT/BSD license
*/

;(function ( window, doc, undef ) {

    parsely = function (strUrl) {
        var uri = {},
            keys = ["source", "protocol", "authDomain", "authLogin", "user", "password", "host", "port", "relative", "path", "dir", "file", "query", "anchor"],
            i = keys.length,
            n = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            m = n.exec(strUrl),
            ext = ['path', 'dir', 'anchor'],
            c = ext.length
            k = /(?:^|&)([^&=]*)=?([^&]*)/g,
            //for params &= etc.
            l = /(?:[^\/\\]+|\\.)+/g; //for dirs/paths
        while (i--) uri[keys[i]] = m[i] || "";
        uri['queries'] = {};
        uri['query'].replace(k, function ($0, $1, $2) {
            if ($1) uri['queries'][$1] = $2;
        });

        while (c--) uri[ext[c] + 's'] = uri[ext[c]].match(l) || "";

        return uri;
    }

    getParsely = function () {
        return parsely;
    }

    window.parsely = getParsely();

})(this, this.document);


