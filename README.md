#Parsely.js

Parsley is a JavaScript URL parser for breaking down both simple and complex URL strings into their component elements. This is achieved primarily through regular expressions with iteration used for extending the break-down of query, path and hash portions of a URL.

usage:

<pre>var parts = parsely( url ); //e.g. parsely('http://google.com');</pre>

Supported URL patterns include:

<pre>
"http:",
"https://",
"http://host",
"http://host/",
"http://host.com",
"http://subdomain.host.com",
"http://host.com:81",
"http://user@host.com",
"http://user@host.com:81",
"http://user:@host.com",
"http://user:@host.com:81",
"http://user:pass@host.com",
"http://user:pass@host.com:81",
"http://user:pass@host.com:81?query",
"http://user:pass@host.com:81#anchor",
"http://user:pass@host.com:81/",
"http://user:pass@host.com:81/?query",
"http://user:pass@host.com:81/#anchor",
"http://user:pass@host.com:81/file.ext",
"http://user:pass@host.com:81/directory",
"http://user:pass@host.com:81/directory?query",
"http://user:pass@host.com:81/directory#anchor",
"http://user:pass@host.com:81/directory/",
"http://user:pass@host.com:81/directory/?query",
"http://user:pass@host.com:81/directory/#anchor",
"http://user:pass@host.com:81/directory/sub.directory/",
"http://user:pass@host.com:81/directory/sub.directory/file.ext",
"http://user:pass@host.com:81/directory/file.ext?query",
"http://user:pass@host.com:81/directory/file.ext?query=1&test=2",
"http://user:pass@host.com:81/directory/file.ext?query=1#anchor",
"//host.com",
"//user:pass@host.com:81/direc.tory/file.ext?query=1&test=2#anchor/anchor2",
"/directory/sub.directory/file.ext?query=1&test=2#anchor",
"/directory/",
"/file.ext",
"/?query",
"/#anchor",
"/",
"?query",
"?query=1&test=2#anchor",
"#anchor",
"path/to/file",
"localhost",
"192.168.1.1",
"host.com",
"host.com:81",
"host.com:81/",
"host.com?query",
"host.com#anchor",
"host.com/",
"host.com/file.ext",
"host.com/directory/?query",
"host.com/directory/#anchor",
"host.com/directory/file.ext",
"host.com:81/direc.tory/file.ext?query=1&test=2#anchor",
"user@host.com",
"user@host.com:81",
"user@host.com/",
"user@host.com/file.ext",
"user@host.com?query",
"user@host.com#anchor",
"user:pass@host.com:81/direc.tory/file.ext?query=1&test=2#anchor"
</pre>

Parsely comes complete with a number of unit tests.