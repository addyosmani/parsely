describe("Helpers", function(){
var testUrls = [  /*test set 1*/
		["http:"],
		["https://"],
		["http://host"],
		["http://host/"],
		["http://host.com"],
		["http://subdomain.host.com"],
		["http://host.com:81"],
		["http://user@host.com"],
		["http://user@host.com:81"],
		["http://user:@host.com"],
		["http://user:@host.com:81"],
		["http://user:pass@host.com"],
		["http://user:pass@host.com:81"],
		["http://user:pass@host.com:81?query"],
		["http://user:pass@host.com:81#anchor"],
		["http://user:pass@host.com:81/"],
		["http://user:pass@host.com:81/?query"],
		["http://user:pass@host.com:81/#anchor"],
		["http://user:pass@host.com:81/file.ext"],
		["http://user:pass@host.com:81/directory"],
		["http://user:pass@host.com:81/directory?query"],
		["http://user:pass@host.com:81/directory#anchor"],
		["http://user:pass@host.com:81/directory/"],
		["http://user:pass@host.com:81/directory/?query"],
		["http://user:pass@host.com:81/directory/#anchor"],
		["http://user:pass@host.com:81/directory/sub.directory/"],
		["http://user:pass@host.com:81/directory/sub.directory/file.ext"],
		["http://user:pass@host.com:81/directory/file.ext?query"],
		["http://user:pass@host.com:81/directory/file.ext?query=1&test=2"],
		["http://user:pass@host.com:81/directory/file.ext?query=1#anchor"],
		["//host.com"],
		["//user:pass@host.com:81/direc.tory/file.ext?query=1&test=2#anchor/anchor2"],
		["/directory/sub.directory/file.ext?query=1&test=2#anchor"],
		["/directory/"],
		["/file.ext"],
		["/?query"],
		["/#anchor"],
		["/"],
		["?query"],
		["?query=1&test=2#anchor"],
		["#anchor"],
		["path/to/file"],
		["localhost"],
		["192.168.1.1"],
		["host.com"],
		["host.com:81"],
		["host.com:81/"],
		["host.com?query"],
		["host.com#anchor"],
		["host.com/"],
		["host.com/file.ext"],
		["host.com/directory/?query"],
		["host.com/directory/#anchor"],
		["host.com/directory/file.ext"],
		["host.com:81/direc.tory/file.ext?query=1&test=2#anchor"],
		["user@host.com"],
		["user@host.com:81"],
		["user@host.com/"],
		["user@host.com/file.ext"],
		["user@host.com?query"],
		["user@host.com#anchor"],
		["user:pass@host.com:81/direc.tory/file.ext?query=1&test=2#anchor"]
	];
	

	/*
		['http://foo.com/blah_blah'],
		['http://foo.com/blah_blah/'],
		['http://foo.com/blah_blah_(wikipedia)'],
		['http://foo.com/blah_blah_(wikipedia)_(again)'],
		['http://www.example.com/wpstyle/?p=364'],
		['https://www.example.com/foo/?bar=baz&inga=42&quux'],
		['http://✪df.ws/123'],
		['http://userid:password@example.com:8080'],
		['http://userid:password@example.com:8080/']
		['http://userid@example.com'],
		['http://userid@example.com/'],
		['http://userid@example.com:8080'],
		['http://userid@example.com:8080/'],
		['http://userid:password@example.com'],
		['http://userid:password@example.com/'],
		['http://142.42.1.1/'],
		['http://142.42.1.1:8080/'],
		['http://➡.ws/䨹'],
		['http://⌘.ws'],
		['http://⌘.ws/'],
		['http://foo.com/blah_(wikipedia)#cite-1'],
		['http://foo.com/blah_(wikipedia)_blah#cite-1'],
		['http://foo.com/unicode_(✪)_in_parens'],
		['http://foo.com/(something)?after=parens'],
		['http://☺.damowmow.com/'],
		['http://code.google.com/events/#&product=browser'],
		['http://j.mp'],
		['ftp://foo.bar/baz'],
		['http://foo.bar/?q=Test%20URL-encoded%20stuff'],
		['http://مثال.إختبار'],
		['http://例子.测试'],
		['http://उदाहरण.परीक्षा'],
		["http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com"],
		['http://1337.net'],
		['http://10.1.1.1'],
		['http://10.1.1.254']
		['http://223.255.255.254']
	*/


it("expect http: to be successfully parsed", function(){

var test0 = parsely(testUrls[0]); 
expect(test0.anchor).toEqual("");
expect(test0.query).toEqual("");
expect(test0.file).toEqual("");
expect(test0.dir).toEqual("");
expect(test0.path).toEqual("");
expect(test0.relative).toEqual("");
expect(test0.port).toEqual("");
expect(test0.host).toEqual("");
expect(test0.password).toEqual("");
expect(test0.user).toEqual("");
expect(test0.authLogin).toEqual("");
expect(test0.authDomain).toEqual("");
expect(test0.protocol).toEqual("http");
expect(test0.source).toEqual("http:");
expect(test0.queries).toEqual({});
expect(test0.anchors).toEqual("");
expect(test0.dirs).toEqual("");
expect(test0.paths).toEqual("");
});

it("expect https:// to be successfully parsed", function(){

var test1 = parsely(testUrls[1]); 
expect(test1.anchor).toEqual("");
expect(test1.query).toEqual("");
expect(test1.file).toEqual("");
expect(test1.dir).toEqual("");
expect(test1.path).toEqual("");
expect(test1.relative).toEqual("");
expect(test1.port).toEqual("");
expect(test1.host).toEqual("");
expect(test1.password).toEqual("");
expect(test1.user).toEqual("");
expect(test1.authLogin).toEqual("");
expect(test1.authDomain).toEqual("");
expect(test1.protocol).toEqual("https");
expect(test1.source).toEqual("https://");
expect(test1.queries).toEqual({});
expect(test1.anchors).toEqual("");
expect(test1.dirs).toEqual("");
expect(test1.paths).toEqual("");
});

it("expect http://host to be successfully parsed", function(){

var test2 = parsely(testUrls[2]); 
expect(test2.anchor).toEqual("");
expect(test2.query).toEqual("");
expect(test2.file).toEqual("");
expect(test2.dir).toEqual("");
expect(test2.path).toEqual("");
expect(test2.relative).toEqual("");
expect(test2.port).toEqual("");
expect(test2.host).toEqual("host");
expect(test2.password).toEqual("");
expect(test2.user).toEqual("");
expect(test2.authLogin).toEqual("");
expect(test2.authDomain).toEqual("host");
expect(test2.protocol).toEqual("http");
expect(test2.source).toEqual("http://host");
expect(test2.queries).toEqual({});
expect(test2.anchors).toEqual("");
expect(test2.dirs).toEqual("");
expect(test2.paths).toEqual("");
});

it("expect http://host/ to be successfully parsed", function(){

var test3 = parsely(testUrls[3]); 
expect(test3.anchor).toEqual("");
expect(test3.query).toEqual("");
expect(test3.file).toEqual("");
expect(test3.dir).toEqual("/");
expect(test3.path).toEqual("/");
expect(test3.relative).toEqual("/");
expect(test3.port).toEqual("");
expect(test3.host).toEqual("host");
expect(test3.password).toEqual("");
expect(test3.user).toEqual("");
expect(test3.authLogin).toEqual("");
expect(test3.authDomain).toEqual("host");
expect(test3.protocol).toEqual("http");
expect(test3.source).toEqual("http://host/");
expect(test3.queries).toEqual({});
expect(test3.anchors).toEqual("");
expect(test3.dirs).toEqual("");
expect(test3.paths).toEqual("");
});

it("expect http://host.com to be successfully parsed", function(){

var test4 = parsely(testUrls[4]); 
expect(test4.anchor).toEqual("");
expect(test4.query).toEqual("");
expect(test4.file).toEqual("");
expect(test4.dir).toEqual("");
expect(test4.path).toEqual("");
expect(test4.relative).toEqual("");
expect(test4.port).toEqual("");
expect(test4.host).toEqual("host.com");
expect(test4.password).toEqual("");
expect(test4.user).toEqual("");
expect(test4.authLogin).toEqual("");
expect(test4.authDomain).toEqual("host.com");
expect(test4.protocol).toEqual("http");
expect(test4.source).toEqual("http://host.com");
expect(test4.queries).toEqual({});
expect(test4.anchors).toEqual("");
expect(test4.dirs).toEqual("");
expect(test4.paths).toEqual("");
});

it("expect http://subdomain.host.com to be successfully parsed", function(){

var test5 = parsely(testUrls[5]); 
expect(test5.anchor).toEqual("");
expect(test5.query).toEqual("");
expect(test5.file).toEqual("");
expect(test5.dir).toEqual("");
expect(test5.path).toEqual("");
expect(test5.relative).toEqual("");
expect(test5.port).toEqual("");
expect(test5.host).toEqual("subdomain.host.com");
expect(test5.password).toEqual("");
expect(test5.user).toEqual("");
expect(test5.authLogin).toEqual("");
expect(test5.authDomain).toEqual("subdomain.host.com");
expect(test5.protocol).toEqual("http");
expect(test5.source).toEqual("http://subdomain.host.com");
expect(test5.queries).toEqual({});
expect(test5.anchors).toEqual("");
expect(test5.dirs).toEqual("");
expect(test5.paths).toEqual("");
});

it("expect http://host.com:81 to be successfully parsed", function(){

var test6 = parsely(testUrls[6]); 
expect(test6.anchor).toEqual("");
expect(test6.query).toEqual("");
expect(test6.file).toEqual("");
expect(test6.dir).toEqual("");
expect(test6.path).toEqual("");
expect(test6.relative).toEqual("");
expect(test6.port).toEqual("81");
expect(test6.host).toEqual("host.com");
expect(test6.password).toEqual("");
expect(test6.user).toEqual("");
expect(test6.authLogin).toEqual("");
expect(test6.authDomain).toEqual("host.com:81");
expect(test6.protocol).toEqual("http");
expect(test6.source).toEqual("http://host.com:81");
expect(test6.queries).toEqual({});
expect(test6.anchors).toEqual("");
expect(test6.dirs).toEqual("");
expect(test6.paths).toEqual("");
});

it("expect http://user@host.com to be successfully parsed", function(){

var test7 = parsely(testUrls[7]); 
expect(test7.anchor).toEqual("");
expect(test7.query).toEqual("");
expect(test7.file).toEqual("");
expect(test7.dir).toEqual("");
expect(test7.path).toEqual("");
expect(test7.relative).toEqual("");
expect(test7.port).toEqual("");
expect(test7.host).toEqual("host.com");
expect(test7.password).toEqual("");
expect(test7.user).toEqual("user");
expect(test7.authLogin).toEqual("user");
expect(test7.authDomain).toEqual("user@host.com");
expect(test7.protocol).toEqual("http");
expect(test7.source).toEqual("http://user@host.com");
expect(test7.queries).toEqual({});
expect(test7.anchors).toEqual("");
expect(test7.dirs).toEqual("");
expect(test7.paths).toEqual("");
});

it("expect http://user@host.com:81 to be successfully parsed", function(){

var test8 = parsely(testUrls[8]); 
expect(test8.anchor).toEqual("");
expect(test8.query).toEqual("");
expect(test8.file).toEqual("");
expect(test8.dir).toEqual("");
expect(test8.path).toEqual("");
expect(test8.relative).toEqual("");
expect(test8.port).toEqual("81");
expect(test8.host).toEqual("host.com");
expect(test8.password).toEqual("");
expect(test8.user).toEqual("user");
expect(test8.authLogin).toEqual("user");
expect(test8.authDomain).toEqual("user@host.com:81");
expect(test8.protocol).toEqual("http");
expect(test8.source).toEqual("http://user@host.com:81");
expect(test8.queries).toEqual({});
expect(test8.anchors).toEqual("");
expect(test8.dirs).toEqual("");
expect(test8.paths).toEqual("");
});

it("expect http://user:@host.com to be successfully parsed", function(){

var test9 = parsely(testUrls[9]); 
expect(test9.anchor).toEqual("");
expect(test9.query).toEqual("");
expect(test9.file).toEqual("");
expect(test9.dir).toEqual("");
expect(test9.path).toEqual("");
expect(test9.relative).toEqual("");
expect(test9.port).toEqual("");
expect(test9.host).toEqual("host.com");
expect(test9.password).toEqual("");
expect(test9.user).toEqual("user");
expect(test9.authLogin).toEqual("user:");
expect(test9.authDomain).toEqual("user:@host.com");
expect(test9.protocol).toEqual("http");
expect(test9.source).toEqual("http://user:@host.com");
expect(test9.queries).toEqual({});
expect(test9.anchors).toEqual("");
expect(test9.dirs).toEqual("");
expect(test9.paths).toEqual("");
});

it("expect http://user:@host.com:81 to be successfully parsed", function(){

var test10 = parsely(testUrls[10]); 
expect(test10.anchor).toEqual("");
expect(test10.query).toEqual("");
expect(test10.file).toEqual("");
expect(test10.dir).toEqual("");
expect(test10.path).toEqual("");
expect(test10.relative).toEqual("");
expect(test10.port).toEqual("81");
expect(test10.host).toEqual("host.com");
expect(test10.password).toEqual("");
expect(test10.user).toEqual("user");
expect(test10.authLogin).toEqual("user:");
expect(test10.authDomain).toEqual("user:@host.com:81");
expect(test10.protocol).toEqual("http");
expect(test10.source).toEqual("http://user:@host.com:81");
expect(test10.queries).toEqual({});
expect(test10.anchors).toEqual("");
expect(test10.dirs).toEqual("");
expect(test10.paths).toEqual("");
});

it("expect http://user:pass@host.com to be successfully parsed", function(){

var test11 = parsely(testUrls[11]); 
expect(test11.anchor).toEqual("");
expect(test11.query).toEqual("");
expect(test11.file).toEqual("");
expect(test11.dir).toEqual("");
expect(test11.path).toEqual("");
expect(test11.relative).toEqual("");
expect(test11.port).toEqual("");
expect(test11.host).toEqual("host.com");
expect(test11.password).toEqual("pass");
expect(test11.user).toEqual("user");
expect(test11.authLogin).toEqual("user:pass");
expect(test11.authDomain).toEqual("user:pass@host.com");
expect(test11.protocol).toEqual("http");
expect(test11.source).toEqual("http://user:pass@host.com");
expect(test11.queries).toEqual({});
expect(test11.anchors).toEqual("");
expect(test11.dirs).toEqual("");
expect(test11.paths).toEqual("");
});

it("expect http://user:pass@host.com:81 to be successfully parsed", function(){

var test12 = parsely(testUrls[12]); 
expect(test12.anchor).toEqual("");
expect(test12.query).toEqual("");
expect(test12.file).toEqual("");
expect(test12.dir).toEqual("");
expect(test12.path).toEqual("");
expect(test12.relative).toEqual("");
expect(test12.port).toEqual("81");
expect(test12.host).toEqual("host.com");
expect(test12.password).toEqual("pass");
expect(test12.user).toEqual("user");
expect(test12.authLogin).toEqual("user:pass");
expect(test12.authDomain).toEqual("user:pass@host.com:81");
expect(test12.protocol).toEqual("http");
expect(test12.source).toEqual("http://user:pass@host.com:81");
expect(test12.queries).toEqual({});
expect(test12.anchors).toEqual("");
expect(test12.dirs).toEqual("");
expect(test12.paths).toEqual("");
});

it("expect http://user:pass@host.com:81?query to be successfully parsed", function(){

var test13 = parsely(testUrls[13]); 
expect(test13.anchor).toEqual("");
//expect(test13.query).toEqual("");
expect(test13.file).toEqual("");
expect(test13.dir).toEqual("");
expect(test13.path).toEqual("");
expect(test13.relative).toEqual("?query");
expect(test13.port).toEqual("81");
expect(test13.host).toEqual("host.com");
expect(test13.password).toEqual("pass");
expect(test13.user).toEqual("user");
expect(test13.authLogin).toEqual("user:pass");
expect(test13.authDomain).toEqual("user:pass@host.com:81");
expect(test13.protocol).toEqual("http");
expect(test13.source).toEqual("http://user:pass@host.com:81?query");
expect(test13.queries).toEqual({ query : '' });
expect(test13.anchors).toEqual("");
expect(test13.dirs).toEqual("");
expect(test13.paths).toEqual("");
});

it("expect http://user:pass@host.com:81#anchor to be successfully parsed", function(){

var test14 = parsely(testUrls[14]); 
expect(test14.anchor).toEqual("anchor");
expect(test14.query).toEqual("");
expect(test14.file).toEqual("");
expect(test14.dir).toEqual("");
expect(test14.path).toEqual("");
expect(test14.relative).toEqual("#anchor");
expect(test14.port).toEqual("81");
expect(test14.host).toEqual("host.com");
expect(test14.password).toEqual("pass");
expect(test14.user).toEqual("user");
expect(test14.authLogin).toEqual("user:pass");
expect(test14.authDomain).toEqual("user:pass@host.com:81");
expect(test14.protocol).toEqual("http");
expect(test14.source).toEqual("http://user:pass@host.com:81#anchor");
expect(test14.queries).toEqual({});
expect(test14.anchors).toEqual(["anchor"]);
expect(test14.dirs).toEqual("");
expect(test14.paths).toEqual("");
});

it("expect http://user:pass@host.com:81/ to be successfully parsed", function(){

var test15 = parsely(testUrls[15]); 
expect(test15.anchor).toEqual("");
expect(test15.query).toEqual("");
expect(test15.file).toEqual("");
expect(test15.dir).toEqual("/");
expect(test15.path).toEqual("/");
expect(test15.relative).toEqual("/");
expect(test15.port).toEqual("81");
expect(test15.host).toEqual("host.com");
expect(test15.password).toEqual("pass");
expect(test15.user).toEqual("user");
expect(test15.authLogin).toEqual("user:pass");
expect(test15.authDomain).toEqual("user:pass@host.com:81");
expect(test15.protocol).toEqual("http");
expect(test15.source).toEqual("http://user:pass@host.com:81/");
expect(test15.queries).toEqual({});
expect(test15.anchors).toEqual("");
expect(test15.dirs).toEqual("");
expect(test15.paths).toEqual("");
});

it("expect http://user:pass@host.com:81/?query to be successfully parsed", function(){

var test16 = parsely(testUrls[16]); 
expect(test16.anchor).toEqual("");
expect(test16.query).toEqual("query");
expect(test16.file).toEqual("");
expect(test16.dir).toEqual("/");
expect(test16.path).toEqual("/");
expect(test16.relative).toEqual("/?query");
expect(test16.port).toEqual("81");
expect(test16.host).toEqual("host.com");
expect(test16.password).toEqual("pass");
expect(test16.user).toEqual("user");
expect(test16.authLogin).toEqual("user:pass");
expect(test16.authDomain).toEqual("user:pass@host.com:81");
expect(test16.protocol).toEqual("http");
expect(test16.source).toEqual("http://user:pass@host.com:81/?query");
expect(test16.queries).toEqual({ query : '' } );
expect(test16.anchors).toEqual("");
expect(test16.dirs).toEqual("");
expect(test16.paths).toEqual("");
});

it("expect http://user:pass@host.com:81/#anchor to be successfully parsed", function(){

var test17 = parsely(testUrls[17]); 
expect(test17.anchor).toEqual("anchor");
expect(test17.query).toEqual("");
expect(test17.file).toEqual("");
expect(test17.dir).toEqual("/");
expect(test17.path).toEqual("/");
expect(test17.relative).toEqual("/#anchor");
expect(test17.port).toEqual("81");
expect(test17.host).toEqual("host.com");
expect(test17.password).toEqual("pass");
expect(test17.user).toEqual("user");
expect(test17.authLogin).toEqual("user:pass");
expect(test17.authDomain).toEqual("user:pass@host.com:81");
expect(test17.protocol).toEqual("http");
expect(test17.source).toEqual("http://user:pass@host.com:81/#anchor");
expect(test17.queries).toEqual({});
expect(test17.anchors).toEqual(["anchor"]);
expect(test17.dirs).toEqual("");
expect(test17.paths).toEqual("");
});

it("expect http://user:pass@host.com:81/file.ext to be successfully parsed", function(){

var test18 = parsely(testUrls[18]); 
expect(test18.anchor).toEqual("");
expect(test18.query).toEqual("");
expect(test18.file).toEqual("file.ext");
expect(test18.dir).toEqual("/");
expect(test18.path).toEqual("/file.ext");
expect(test18.relative).toEqual("/file.ext");
expect(test18.port).toEqual("81");
expect(test18.host).toEqual("host.com");
expect(test18.password).toEqual("pass");
expect(test18.user).toEqual("user");
expect(test18.authLogin).toEqual("user:pass");
expect(test18.authDomain).toEqual("user:pass@host.com:81");
expect(test18.protocol).toEqual("http");
expect(test18.source).toEqual("http://user:pass@host.com:81/file.ext");
expect(test18.queries).toEqual({});
expect(test18.anchors).toEqual("");
expect(test18.dirs).toEqual("");
expect(test18.paths).toEqual(["file.ext"]);
});

it("expect http://user:pass@host.com:81/directory to be successfully parsed", function(){

var test19 = parsely(testUrls[19]); 
expect(test19.anchor).toEqual("");
expect(test19.query).toEqual("");
expect(test19.file).toEqual("");
expect(test19.dir).toEqual("/directory");
expect(test19.path).toEqual("/directory");
expect(test19.relative).toEqual("/directory");
expect(test19.port).toEqual("81");
expect(test19.host).toEqual("host.com");
expect(test19.password).toEqual("pass");
expect(test19.user).toEqual("user");
expect(test19.authLogin).toEqual("user:pass");
expect(test19.authDomain).toEqual("user:pass@host.com:81");
expect(test19.protocol).toEqual("http");
expect(test19.source).toEqual("http://user:pass@host.com:81/directory");
expect(test19.queries).toEqual({});
expect(test19.anchors).toEqual("");
expect(test19.dirs).toEqual(["directory"]);
expect(test19.paths).toEqual(["directory"]);
});

it("expect http://user:pass@host.com:81/directory?query to be successfully parsed", function(){

var test20 = parsely(testUrls[20]); 
expect(test20.anchor).toEqual("");
expect(test20.query).toEqual("query");
expect(test20.file).toEqual("");
expect(test20.dir).toEqual("/directory");
expect(test20.path).toEqual("/directory");
expect(test20.relative).toEqual("/directory?query");
expect(test20.port).toEqual("81");
expect(test20.host).toEqual("host.com");
expect(test20.password).toEqual("pass");
expect(test20.user).toEqual("user");
expect(test20.authLogin).toEqual("user:pass");
expect(test20.authDomain).toEqual("user:pass@host.com:81");
expect(test20.protocol).toEqual("http");
expect(test20.source).toEqual("http://user:pass@host.com:81/directory?query");
expect(test20.queries).toEqual({ query : '' });
expect(test20.anchors).toEqual("");
expect(test20.dirs).toEqual(["directory"]);
expect(test20.paths).toEqual(["directory"]);
});

it("expect http://user:pass@host.com:81/directory#anchor to be successfully parsed", function(){

var test21 = parsely(testUrls[21]); 
expect(test21.anchor).toEqual("anchor");
expect(test21.query).toEqual("");
expect(test21.file).toEqual("");
expect(test21.dir).toEqual("/directory");
expect(test21.path).toEqual("/directory");
expect(test21.relative).toEqual("/directory#anchor");
expect(test21.port).toEqual("81");
expect(test21.host).toEqual("host.com");
expect(test21.password).toEqual("pass");
expect(test21.user).toEqual("user");
expect(test21.authLogin).toEqual("user:pass");
expect(test21.authDomain).toEqual("user:pass@host.com:81");
expect(test21.protocol).toEqual("http");
expect(test21.source).toEqual("http://user:pass@host.com:81/directory#anchor");
expect(test21.queries).toEqual({});
expect(test21.anchors).toEqual(["anchor"]);
expect(test21.dirs).toEqual(["directory"]);
expect(test21.paths).toEqual(["directory"]);
});

it("expect http://user:pass@host.com:81/directory/ to be successfully parsed", function(){

var test22 = parsely(testUrls[22]); 
expect(test22.anchor).toEqual("");
expect(test22.query).toEqual("");
expect(test22.file).toEqual("");
expect(test22.dir).toEqual("/directory/");
expect(test22.path).toEqual("/directory/");
expect(test22.relative).toEqual("/directory/");
expect(test22.port).toEqual("81");
expect(test22.host).toEqual("host.com");
expect(test22.password).toEqual("pass");
expect(test22.user).toEqual("user");
expect(test22.authLogin).toEqual("user:pass");
expect(test22.authDomain).toEqual("user:pass@host.com:81");
expect(test22.protocol).toEqual("http");
expect(test22.source).toEqual("http://user:pass@host.com:81/directory/");
expect(test22.queries).toEqual({});
expect(test22.anchors).toEqual("");
expect(test22.dirs).toEqual(["directory"]);
expect(test22.paths).toEqual(["directory"]);
});

it("expect http://user:pass@host.com:81/directory/?query to be successfully parsed", function(){

var test23 = parsely(testUrls[23]); 
expect(test23.anchor).toEqual("");
expect(test23.query).toEqual("query");
expect(test23.file).toEqual("");
expect(test23.dir).toEqual("/directory/");
expect(test23.path).toEqual("/directory/");
expect(test23.relative).toEqual("/directory/?query");
expect(test23.port).toEqual("81");
expect(test23.host).toEqual("host.com");
expect(test23.password).toEqual("pass");
expect(test23.user).toEqual("user");
expect(test23.authLogin).toEqual("user:pass");
expect(test23.authDomain).toEqual("user:pass@host.com:81");
expect(test23.protocol).toEqual("http");
expect(test23.source).toEqual("http://user:pass@host.com:81/directory/?query");
expect(test23.queries).toEqual({ query : '' });
expect(test23.anchors).toEqual("");
expect(test23.dirs).toEqual(["directory"]);
expect(test23.paths).toEqual(["directory"]);
});

it("expect http://user:pass@host.com:81/directory/#anchor to be successfully parsed", function(){

var test24 = parsely(testUrls[24]); 
expect(test24.anchor).toEqual("anchor");
expect(test24.query).toEqual("");
expect(test24.file).toEqual("");
expect(test24.dir).toEqual("/directory/");
expect(test24.path).toEqual("/directory/");
expect(test24.relative).toEqual("/directory/#anchor");
expect(test24.port).toEqual("81");
expect(test24.host).toEqual("host.com");
expect(test24.password).toEqual("pass");
expect(test24.user).toEqual("user");
expect(test24.authLogin).toEqual("user:pass");
expect(test24.authDomain).toEqual("user:pass@host.com:81");
expect(test24.protocol).toEqual("http");
expect(test24.source).toEqual("http://user:pass@host.com:81/directory/#anchor");
expect(test24.queries).toEqual({});
expect(test24.anchors).toEqual(["anchor"]);
expect(test24.dirs).toEqual(["directory"]);
expect(test24.paths).toEqual(["directory"]);
});

it("expect http://user:pass@host.com:81/directory/sub.directory/ to be successfully parsed", function(){

var test25 = parsely(testUrls[25]); 
expect(test25.anchor).toEqual("");
expect(test25.query).toEqual("");
expect(test25.file).toEqual("");
expect(test25.dir).toEqual("/directory/sub.directory/");
expect(test25.path).toEqual("/directory/sub.directory/");
expect(test25.relative).toEqual("/directory/sub.directory/");
expect(test25.port).toEqual("81");
expect(test25.host).toEqual("host.com");
expect(test25.password).toEqual("pass");
expect(test25.user).toEqual("user");
expect(test25.authLogin).toEqual("user:pass");
expect(test25.authDomain).toEqual("user:pass@host.com:81");
expect(test25.protocol).toEqual("http");
expect(test25.source).toEqual("http://user:pass@host.com:81/directory/sub.directory/");
expect(test25.queries).toEqual({});
expect(test25.anchors).toEqual("");
expect(test25.dirs).toEqual(["directory","sub.directory"]);
expect(test25.paths).toEqual(["directory","sub.directory"]);
});

it("expect http://user:pass@host.com:81/directory/sub.directory/file.ext to be successfully parsed", function(){

var test26 = parsely(testUrls[26]); 
expect(test26.anchor).toEqual("");
expect(test26.query).toEqual("");
expect(test26.file).toEqual("file.ext");
expect(test26.dir).toEqual("/directory/sub.directory/");
expect(test26.path).toEqual("/directory/sub.directory/file.ext");
expect(test26.relative).toEqual("/directory/sub.directory/file.ext");
expect(test26.port).toEqual("81");
expect(test26.host).toEqual("host.com");
expect(test26.password).toEqual("pass");
expect(test26.user).toEqual("user");
expect(test26.authLogin).toEqual("user:pass");
expect(test26.authDomain).toEqual("user:pass@host.com:81");
expect(test26.protocol).toEqual("http");
expect(test26.source).toEqual("http://user:pass@host.com:81/directory/sub.directory/file.ext");
expect(test26.queries).toEqual({});
expect(test26.anchors).toEqual("");
expect(test26.dirs).toEqual(["directory","sub.directory"]);
expect(test26.paths).toEqual(["directory","sub.directory","file.ext"]);
});

it("expect http://user:pass@host.com:81/directory/file.ext?query to be successfully parsed", function(){

var test27 = parsely(testUrls[27]); 
expect(test27.anchor).toEqual("");
//expect(test27.query).toEqual("query");
expect(test27.file).toEqual("file.ext");
expect(test27.dir).toEqual("/directory/");
expect(test27.path).toEqual("/directory/file.ext");
expect(test27.relative).toEqual("/directory/file.ext?query");
expect(test27.port).toEqual("81");
expect(test27.host).toEqual("host.com");
expect(test27.password).toEqual("pass");
expect(test27.user).toEqual("user");
expect(test27.authLogin).toEqual("user:pass");
expect(test27.authDomain).toEqual("user:pass@host.com:81");
expect(test27.protocol).toEqual("http");
expect(test27.source).toEqual("http://user:pass@host.com:81/directory/file.ext?query");
//expect(test27.queries).toEqual({});
expect(test27.anchors).toEqual("");
expect(test27.dirs).toEqual(["directory"]);
expect(test27.paths).toEqual(["directory","file.ext"]);
});

it("expect http://user:pass@host.com:81/directory/file.ext?query=1&test=2 to be successfully parsed", function(){

var test28 = parsely(testUrls[28]); 
expect(test28.anchor).toEqual("");
expect(test28.query).toEqual("query=1&test=2");
expect(test28.file).toEqual("file.ext");
expect(test28.dir).toEqual("/directory/");
expect(test28.path).toEqual("/directory/file.ext");
expect(test28.relative).toEqual("/directory/file.ext?query=1&test=2");
expect(test28.port).toEqual("81");
expect(test28.host).toEqual("host.com");
expect(test28.password).toEqual("pass");
expect(test28.user).toEqual("user");
expect(test28.authLogin).toEqual("user:pass");
expect(test28.authDomain).toEqual("user:pass@host.com:81");
expect(test28.protocol).toEqual("http");
expect(test28.source).toEqual("http://user:pass@host.com:81/directory/file.ext?query=1&test=2");
expect(test28.queries).toEqual({ query : '1', test : '2' });
expect(test28.anchors).toEqual("");
expect(test28.dirs).toEqual(["directory"]);
expect(test28.paths).toEqual(["directory","file.ext"]);
});

it("expect http://user:pass@host.com:81/directory/file.ext?query=1#anchor to be successfully parsed", function(){

var test29 = parsely(testUrls[29]); 
expect(test29.anchor).toEqual("anchor");
expect(test29.query).toEqual("query=1");
expect(test29.file).toEqual("file.ext");
expect(test29.dir).toEqual("/directory/");
expect(test29.path).toEqual("/directory/file.ext");
expect(test29.relative).toEqual("/directory/file.ext?query=1#anchor");
expect(test29.port).toEqual("81");
expect(test29.host).toEqual("host.com");
expect(test29.password).toEqual("pass");
expect(test29.user).toEqual("user");
expect(test29.authLogin).toEqual("user:pass");
expect(test29.authDomain).toEqual("user:pass@host.com:81");
expect(test29.protocol).toEqual("http");
expect(test29.source).toEqual("http://user:pass@host.com:81/directory/file.ext?query=1#anchor");
expect(test29.queries).toEqual({ query : '1' });
expect(test29.anchors).toEqual(["anchor"]);
expect(test29.dirs).toEqual(["directory"]);
expect(test29.paths).toEqual(["directory","file.ext"]);
});

it("expect //host.com to be successfully parsed", function(){

var test30 = parsely(testUrls[30]); 
expect(test30.anchor).toEqual("");
expect(test30.query).toEqual("");
expect(test30.file).toEqual("");
expect(test30.dir).toEqual("");
expect(test30.path).toEqual("");
expect(test30.relative).toEqual("");
expect(test30.port).toEqual("");
expect(test30.host).toEqual("host.com");
expect(test30.password).toEqual("");
expect(test30.user).toEqual("");
expect(test30.authLogin).toEqual("");
expect(test30.authDomain).toEqual("host.com");
expect(test30.protocol).toEqual("");
expect(test30.source).toEqual("//host.com");
expect(test30.queries).toEqual({});
expect(test30.anchors).toEqual("");
expect(test30.dirs).toEqual("");
expect(test30.paths).toEqual("");
});

it("expect //user:pass@host.com:81/direc.tory/file.ext?query=1&test=2#anchor/anchor2 to be successfully parsed", function(){

var test31 = parsely(testUrls[31]); 
expect(test31.anchor).toEqual("anchor/anchor2");
expect(test31.query).toEqual("query=1&test=2");
expect(test31.file).toEqual("file.ext");
expect(test31.dir).toEqual("/direc.tory/");
expect(test31.path).toEqual("/direc.tory/file.ext");
expect(test31.relative).toEqual("/direc.tory/file.ext?query=1&test=2#anchor/anchor2");
expect(test31.port).toEqual("81");
expect(test31.host).toEqual("host.com");
expect(test31.password).toEqual("pass");
expect(test31.user).toEqual("user");
expect(test31.authLogin).toEqual("user:pass");
expect(test31.authDomain).toEqual("user:pass@host.com:81");
expect(test31.protocol).toEqual("");
expect(test31.source).toEqual("//user:pass@host.com:81/direc.tory/file.ext?query=1&test=2#anchor/anchor2");
expect(test31.queries).toEqual({ query : '1', test : '2' });
expect(test31.anchors).toEqual(["anchor","anchor2"]);
expect(test31.dirs).toEqual(["direc.tory"]);
expect(test31.paths).toEqual(["direc.tory","file.ext"]);
});

it("expect /directory/sub.directory/file.ext?query=1&test=2#anchor to be successfully parsed", function(){

var test32 = parsely(testUrls[32]); 
expect(test32.anchor).toEqual("anchor");
expect(test32.query).toEqual("query=1&test=2");
expect(test32.file).toEqual("file.ext");
expect(test32.dir).toEqual("/directory/sub.directory/");
expect(test32.path).toEqual("/directory/sub.directory/file.ext");
expect(test32.relative).toEqual("/directory/sub.directory/file.ext?query=1&test=2#anchor");
expect(test32.port).toEqual("");
expect(test32.host).toEqual("");
expect(test32.password).toEqual("");
expect(test32.user).toEqual("");
expect(test32.authLogin).toEqual("");
expect(test32.authDomain).toEqual("");
expect(test32.protocol).toEqual("");
expect(test32.source).toEqual("/directory/sub.directory/file.ext?query=1&test=2#anchor");
expect(test32.queries).toEqual({ query : '1', test : '2' });
expect(test32.anchors).toEqual(["anchor"]);
expect(test32.dirs).toEqual(["directory","sub.directory"]);
expect(test32.paths).toEqual(["directory","sub.directory","file.ext"]);
});

it("expect /directory/ to be successfully parsed", function(){

var test33 = parsely(testUrls[33]); 
expect(test33.anchor).toEqual("");
expect(test33.query).toEqual("");
expect(test33.file).toEqual("");
expect(test33.dir).toEqual("/directory/");
expect(test33.path).toEqual("/directory/");
expect(test33.relative).toEqual("/directory/");
expect(test33.port).toEqual("");
expect(test33.host).toEqual("");
expect(test33.password).toEqual("");
expect(test33.user).toEqual("");
expect(test33.authLogin).toEqual("");
expect(test33.authDomain).toEqual("");
expect(test33.protocol).toEqual("");
expect(test33.source).toEqual("/directory/");
expect(test33.queries).toEqual({});
expect(test33.anchors).toEqual("");
expect(test33.dirs).toEqual(["directory"]);
expect(test33.paths).toEqual(["directory"]);
});

it("expect /file.ext to be successfully parsed", function(){

var test34 = parsely(testUrls[34]); 
expect(test34.anchor).toEqual("");
expect(test34.query).toEqual("");
expect(test34.file).toEqual("file.ext");
expect(test34.dir).toEqual("/");
expect(test34.path).toEqual("/file.ext");
expect(test34.relative).toEqual("/file.ext");
expect(test34.port).toEqual("");
expect(test34.host).toEqual("");
expect(test34.password).toEqual("");
expect(test34.user).toEqual("");
expect(test34.authLogin).toEqual("");
expect(test34.authDomain).toEqual("");
expect(test34.protocol).toEqual("");
expect(test34.source).toEqual("/file.ext");
expect(test34.queries).toEqual({});
expect(test34.anchors).toEqual("");
expect(test34.dirs).toEqual("");
expect(test34.paths).toEqual(["file.ext"]);
});

it("expect /?query to be successfully parsed", function(){

var test35 = parsely(testUrls[35]); 
expect(test35.anchor).toEqual("");
expect(test35.query).toEqual("query");
expect(test35.file).toEqual("");
expect(test35.dir).toEqual("/");
expect(test35.path).toEqual("/");
expect(test35.relative).toEqual("/?query");
expect(test35.port).toEqual("");
expect(test35.host).toEqual("");
expect(test35.password).toEqual("");
expect(test35.user).toEqual("");
expect(test35.authLogin).toEqual("");
expect(test35.authDomain).toEqual("");
expect(test35.protocol).toEqual("");
expect(test35.source).toEqual("/?query");
expect(test35.queries).toEqual({ query : '' });
expect(test35.anchors).toEqual("");
expect(test35.dirs).toEqual("");
expect(test35.paths).toEqual("");
});

it("expect /#anchor to be successfully parsed", function(){

var test36 = parsely(testUrls[36]); 
expect(test36.anchor).toEqual("anchor");
expect(test36.query).toEqual("");
expect(test36.file).toEqual("");
expect(test36.dir).toEqual("/");
expect(test36.path).toEqual("/");
expect(test36.relative).toEqual("/#anchor");
expect(test36.port).toEqual("");
expect(test36.host).toEqual("");
expect(test36.password).toEqual("");
expect(test36.user).toEqual("");
expect(test36.authLogin).toEqual("");
expect(test36.authDomain).toEqual("");
expect(test36.protocol).toEqual("");
expect(test36.source).toEqual("/#anchor");
expect(test36.queries).toEqual({});
expect(test36.anchors).toEqual(["anchor"]);
expect(test36.dirs).toEqual("");
expect(test36.paths).toEqual("");
});

it("expect / to be successfully parsed", function(){

var test37 = parsely(testUrls[37]); 
expect(test37.anchor).toEqual("");
expect(test37.query).toEqual("");
expect(test37.file).toEqual("");
expect(test37.dir).toEqual("/");
expect(test37.path).toEqual("/");
expect(test37.relative).toEqual("/");
expect(test37.port).toEqual("");
expect(test37.host).toEqual("");
expect(test37.password).toEqual("");
expect(test37.user).toEqual("");
expect(test37.authLogin).toEqual("");
expect(test37.authDomain).toEqual("");
expect(test37.protocol).toEqual("");
expect(test37.source).toEqual("/");
expect(test37.queries).toEqual({});
expect(test37.anchors).toEqual("");
expect(test37.dirs).toEqual("");
expect(test37.paths).toEqual("");
});

it("expect ?query to be successfully parsed", function(){

var test38 = parsely(testUrls[38]); 
expect(test38.anchor).toEqual("");
expect(test38.query).toEqual("query");
expect(test38.file).toEqual("");
expect(test38.dir).toEqual("");
expect(test38.path).toEqual("");
expect(test38.relative).toEqual("?query");
expect(test38.port).toEqual("");
expect(test38.host).toEqual("");
expect(test38.password).toEqual("");
expect(test38.user).toEqual("");
expect(test38.authLogin).toEqual("");
expect(test38.authDomain).toEqual("");
expect(test38.protocol).toEqual("");
expect(test38.source).toEqual("?query");
expect(test38.queries).toEqual({ query : '' });
expect(test38.anchors).toEqual("");
expect(test38.dirs).toEqual("");
expect(test38.paths).toEqual("");
});

it("expect ?query=1&test=2#anchor to be successfully parsed", function(){

var test39 = parsely(testUrls[39]); 
expect(test39.anchor).toEqual("anchor");
expect(test39.query).toEqual("query=1&test=2");
expect(test39.file).toEqual("");
expect(test39.dir).toEqual("");
expect(test39.path).toEqual("");
expect(test39.relative).toEqual("?query=1&test=2#anchor");
expect(test39.port).toEqual("");
expect(test39.host).toEqual("");
expect(test39.password).toEqual("");
expect(test39.user).toEqual("");
expect(test39.authLogin).toEqual("");
expect(test39.authDomain).toEqual("");
expect(test39.protocol).toEqual("");
expect(test39.source).toEqual("?query=1&test=2#anchor");
expect(test39.queries).toEqual({ query : '1', test : '2' });
expect(test39.anchors).toEqual(["anchor"]);
expect(test39.dirs).toEqual("");
expect(test39.paths).toEqual("");
});

it("expect #anchor to be successfully parsed", function(){

var test40 = parsely(testUrls[40]); 
expect(test40.anchor).toEqual("anchor");
expect(test40.query).toEqual("");
expect(test40.file).toEqual("");
expect(test40.dir).toEqual("");
expect(test40.path).toEqual("");
expect(test40.relative).toEqual("#anchor");
expect(test40.port).toEqual("");
expect(test40.host).toEqual("");
expect(test40.password).toEqual("");
expect(test40.user).toEqual("");
expect(test40.authLogin).toEqual("");
expect(test40.authDomain).toEqual("");
expect(test40.protocol).toEqual("");
expect(test40.source).toEqual("#anchor");
expect(test40.queries).toEqual({});
expect(test40.anchors).toEqual(["anchor"]);
expect(test40.dirs).toEqual("");
expect(test40.paths).toEqual("");
});

it("expect path/to/file to be successfully parsed", function(){

var test41 = parsely(testUrls[41]); 
expect(test41.anchor).toEqual("");
expect(test41.query).toEqual("");
expect(test41.file).toEqual("");
expect(test41.dir).toEqual("/to/file");
expect(test41.path).toEqual("/to/file");
expect(test41.relative).toEqual("/to/file");
expect(test41.port).toEqual("");
expect(test41.host).toEqual("path");
expect(test41.password).toEqual("");
expect(test41.user).toEqual("");
expect(test41.authLogin).toEqual("");
expect(test41.authDomain).toEqual("path");
expect(test41.protocol).toEqual("");
expect(test41.source).toEqual("path/to/file");
expect(test41.queries).toEqual({});
expect(test41.anchors).toEqual("");
expect(test41.dirs).toEqual(["to","file"]);
expect(test41.paths).toEqual(["to","file"]);
});

it("expect localhost to be successfully parsed", function(){

var test42 = parsely(testUrls[42]); 
expect(test42.anchor).toEqual("");
expect(test42.query).toEqual("");
expect(test42.file).toEqual("");
expect(test42.dir).toEqual("");
expect(test42.path).toEqual("");
expect(test42.relative).toEqual("");
expect(test42.port).toEqual("");
expect(test42.host).toEqual("localhost");
expect(test42.password).toEqual("");
expect(test42.user).toEqual("");
expect(test42.authLogin).toEqual("");
expect(test42.authDomain).toEqual("localhost");
expect(test42.protocol).toEqual("");
expect(test42.source).toEqual("localhost");
expect(test42.queries).toEqual({});
expect(test42.anchors).toEqual("");
expect(test42.dirs).toEqual("");
expect(test42.paths).toEqual("");
});

it("expect 192.168.1.1 to be successfully parsed", function(){

var test43 = parsely(testUrls[43]); 
expect(test43.anchor).toEqual("");
expect(test43.query).toEqual("");
expect(test43.file).toEqual("");
expect(test43.dir).toEqual("");
expect(test43.path).toEqual("");
expect(test43.relative).toEqual("");
expect(test43.port).toEqual("");
expect(test43.host).toEqual("192.168.1.1");
expect(test43.password).toEqual("");
expect(test43.user).toEqual("");
expect(test43.authLogin).toEqual("");
expect(test43.authDomain).toEqual("192.168.1.1");
expect(test43.protocol).toEqual("");
expect(test43.source).toEqual("192.168.1.1");
expect(test43.queries).toEqual({});
expect(test43.anchors).toEqual("");
expect(test43.dirs).toEqual("");
expect(test43.paths).toEqual("");
});

it("expect host.com to be successfully parsed", function(){

var test44 = parsely(testUrls[44]); 
expect(test44.anchor).toEqual("");
expect(test44.query).toEqual("");
expect(test44.file).toEqual("");
expect(test44.dir).toEqual("");
expect(test44.path).toEqual("");
expect(test44.relative).toEqual("");
expect(test44.port).toEqual("");
expect(test44.host).toEqual("host.com");
expect(test44.password).toEqual("");
expect(test44.user).toEqual("");
expect(test44.authLogin).toEqual("");
expect(test44.authDomain).toEqual("host.com");
expect(test44.protocol).toEqual("");
expect(test44.source).toEqual("host.com");
expect(test44.queries).toEqual({});
expect(test44.anchors).toEqual("");
expect(test44.dirs).toEqual("");
expect(test44.paths).toEqual("");
});

it("expect host.com:81 to be successfully parsed", function(){

var test45 = parsely(testUrls[45]); 
expect(test45.anchor).toEqual("");
expect(test45.query).toEqual("");
expect(test45.file).toEqual("");
expect(test45.dir).toEqual("");
expect(test45.path).toEqual("");
expect(test45.relative).toEqual("");
expect(test45.port).toEqual("81");
expect(test45.host).toEqual("host.com");
expect(test45.password).toEqual("");
expect(test45.user).toEqual("");
expect(test45.authLogin).toEqual("");
expect(test45.authDomain).toEqual("host.com:81");
expect(test45.protocol).toEqual("");
expect(test45.source).toEqual("host.com:81");
expect(test45.queries).toEqual({});
expect(test45.anchors).toEqual("");
expect(test45.dirs).toEqual("");
expect(test45.paths).toEqual("");
});

it("expect host.com:81/ to be successfully parsed", function(){

var test46 = parsely(testUrls[46]); 
expect(test46.anchor).toEqual("");
expect(test46.query).toEqual("");
expect(test46.file).toEqual("");
expect(test46.dir).toEqual("/");
expect(test46.path).toEqual("/");
expect(test46.relative).toEqual("/");
expect(test46.port).toEqual("81");
expect(test46.host).toEqual("host.com");
expect(test46.password).toEqual("");
expect(test46.user).toEqual("");
expect(test46.authLogin).toEqual("");
expect(test46.authDomain).toEqual("host.com:81");
expect(test46.protocol).toEqual("");
expect(test46.source).toEqual("host.com:81/");
expect(test46.queries).toEqual({});
expect(test46.anchors).toEqual("");
expect(test46.dirs).toEqual("");
expect(test46.paths).toEqual("");
});

it("expect host.com?query to be successfully parsed", function(){

var test47 = parsely(testUrls[47]); 
expect(test47.anchor).toEqual("");
expect(test47.query).toEqual("query");
expect(test47.file).toEqual("");
expect(test47.dir).toEqual("");
expect(test47.path).toEqual("");
expect(test47.relative).toEqual("?query");
expect(test47.port).toEqual("");
expect(test47.host).toEqual("host.com");
expect(test47.password).toEqual("");
expect(test47.user).toEqual("");
expect(test47.authLogin).toEqual("");
expect(test47.authDomain).toEqual("host.com");
expect(test47.protocol).toEqual("");
expect(test47.source).toEqual("host.com?query");
expect(test47.queries).toEqual({ query : '' });
expect(test47.anchors).toEqual("");
expect(test47.dirs).toEqual("");
expect(test47.paths).toEqual("");
});

it("expect host.com#anchor to be successfully parsed", function(){

var test48 = parsely(testUrls[48]); 
expect(test48.anchor).toEqual("anchor");
expect(test48.query).toEqual("");
expect(test48.file).toEqual("");
expect(test48.dir).toEqual("");
expect(test48.path).toEqual("");
expect(test48.relative).toEqual("#anchor");
expect(test48.port).toEqual("");
expect(test48.host).toEqual("host.com");
expect(test48.password).toEqual("");
expect(test48.user).toEqual("");
expect(test48.authLogin).toEqual("");
expect(test48.authDomain).toEqual("host.com");
expect(test48.protocol).toEqual("");
expect(test48.source).toEqual("host.com#anchor");
expect(test48.queries).toEqual({});
expect(test48.anchors).toEqual(["anchor"]);
expect(test48.dirs).toEqual("");
expect(test48.paths).toEqual("");
});

it("expect host.com/ to be successfully parsed", function(){

var test49 = parsely(testUrls[49]); 
expect(test49.anchor).toEqual("");
expect(test49.query).toEqual("");
expect(test49.file).toEqual("");
expect(test49.dir).toEqual("/");
expect(test49.path).toEqual("/");
expect(test49.relative).toEqual("/");
expect(test49.port).toEqual("");
expect(test49.host).toEqual("host.com");
expect(test49.password).toEqual("");
expect(test49.user).toEqual("");
expect(test49.authLogin).toEqual("");
expect(test49.authDomain).toEqual("host.com");
expect(test49.protocol).toEqual("");
expect(test49.source).toEqual("host.com/");
expect(test49.queries).toEqual({});
expect(test49.anchors).toEqual("");
expect(test49.dirs).toEqual("");
expect(test49.paths).toEqual("");
});

it("expect host.com/file.ext to be successfully parsed", function(){

var test50 = parsely(testUrls[50]); 
expect(test50.anchor).toEqual("");
expect(test50.query).toEqual("");
expect(test50.file).toEqual("file.ext");
expect(test50.dir).toEqual("/");
expect(test50.path).toEqual("/file.ext");
expect(test50.relative).toEqual("/file.ext");
expect(test50.port).toEqual("");
expect(test50.host).toEqual("host.com");
expect(test50.password).toEqual("");
expect(test50.user).toEqual("");
expect(test50.authLogin).toEqual("");
expect(test50.authDomain).toEqual("host.com");
expect(test50.protocol).toEqual("");
expect(test50.source).toEqual("host.com/file.ext");
expect(test50.queries).toEqual({});
expect(test50.anchors).toEqual("");
expect(test50.dirs).toEqual("");
expect(test50.paths).toEqual(["file.ext"]);
});

it("expect host.com/directory/?query to be successfully parsed", function(){

var test51 = parsely(testUrls[51]); 
expect(test51.anchor).toEqual("");
expect(test51.query).toEqual("query");
expect(test51.file).toEqual("");
expect(test51.dir).toEqual("/directory/");
expect(test51.path).toEqual("/directory/");
expect(test51.relative).toEqual("/directory/?query");
expect(test51.port).toEqual("");
expect(test51.host).toEqual("host.com");
expect(test51.password).toEqual("");
expect(test51.user).toEqual("");
expect(test51.authLogin).toEqual("");
expect(test51.authDomain).toEqual("host.com");
expect(test51.protocol).toEqual("");
expect(test51.source).toEqual("host.com/directory/?query");
expect(test51.queries).toEqual({ query : '' });
expect(test51.anchors).toEqual("");
expect(test51.dirs).toEqual(["directory"]);
expect(test51.paths).toEqual(["directory"]);
});

it("expect host.com/directory/#anchor to be successfully parsed", function(){

var test52 = parsely(testUrls[52]); 
expect(test52.anchor).toEqual("anchor");
expect(test52.query).toEqual("");
expect(test52.file).toEqual("");
expect(test52.dir).toEqual("/directory/");
expect(test52.path).toEqual("/directory/");
expect(test52.relative).toEqual("/directory/#anchor");
expect(test52.port).toEqual("");
expect(test52.host).toEqual("host.com");
expect(test52.password).toEqual("");
expect(test52.user).toEqual("");
expect(test52.authLogin).toEqual("");
expect(test52.authDomain).toEqual("host.com");
expect(test52.protocol).toEqual("");
expect(test52.source).toEqual("host.com/directory/#anchor");
expect(test52.queries).toEqual({});
expect(test52.anchors).toEqual(["anchor"]);
expect(test52.dirs).toEqual(["directory"]);
expect(test52.paths).toEqual(["directory"]);
});

it("expect host.com/directory/file.ext to be successfully parsed", function(){

var test53 = parsely(testUrls[53]); 
expect(test53.anchor).toEqual("");
expect(test53.query).toEqual("");
expect(test53.file).toEqual("file.ext");
expect(test53.dir).toEqual("/directory/");
expect(test53.path).toEqual("/directory/file.ext");
expect(test53.relative).toEqual("/directory/file.ext");
expect(test53.port).toEqual("");
expect(test53.host).toEqual("host.com");
expect(test53.password).toEqual("");
expect(test53.user).toEqual("");
expect(test53.authLogin).toEqual("");
expect(test53.authDomain).toEqual("host.com");
expect(test53.protocol).toEqual("");
expect(test53.source).toEqual("host.com/directory/file.ext");
expect(test53.queries).toEqual({});
expect(test53.anchors).toEqual("");
expect(test53.dirs).toEqual(["directory"]);
expect(test53.paths).toEqual(["directory","file.ext"]);
});

it("expect host.com:81/direc.tory/file.ext?query=1&test=2#anchor to be successfully parsed", function(){

var test54 = parsely(testUrls[54]); 
expect(test54.anchor).toEqual("anchor");
expect(test54.query).toEqual("query=1&test=2");
expect(test54.file).toEqual("file.ext");
expect(test54.dir).toEqual("/direc.tory/");
expect(test54.path).toEqual("/direc.tory/file.ext");
expect(test54.relative).toEqual("/direc.tory/file.ext?query=1&test=2#anchor");
expect(test54.port).toEqual("81");
expect(test54.host).toEqual("host.com");
expect(test54.password).toEqual("");
expect(test54.user).toEqual("");
expect(test54.authLogin).toEqual("");
expect(test54.authDomain).toEqual("host.com:81");
expect(test54.protocol).toEqual("");
expect(test54.source).toEqual("host.com:81/direc.tory/file.ext?query=1&test=2#anchor");
expect(test54.queries).toEqual({ query : '1', test : '2' });
expect(test54.anchors).toEqual(["anchor"]);
expect(test54.dirs).toEqual(["direc.tory"]);
expect(test54.paths).toEqual(["direc.tory","file.ext"]);
});

it("expect user@host.com to be successfully parsed", function(){

var test55 = parsely(testUrls[55]); 
expect(test55.anchor).toEqual("");
expect(test55.query).toEqual("");
expect(test55.file).toEqual("");
expect(test55.dir).toEqual("");
expect(test55.path).toEqual("");
expect(test55.relative).toEqual("");
expect(test55.port).toEqual("");
expect(test55.host).toEqual("host.com");
expect(test55.password).toEqual("");
expect(test55.user).toEqual("user");
expect(test55.authLogin).toEqual("user");
expect(test55.authDomain).toEqual("user@host.com");
expect(test55.protocol).toEqual("");
expect(test55.source).toEqual("user@host.com");
expect(test55.queries).toEqual({});
expect(test55.anchors).toEqual("");
expect(test55.dirs).toEqual("");
expect(test55.paths).toEqual("");
});

it("expect user@host.com:81 to be successfully parsed", function(){

var test56 = parsely(testUrls[56]); 
expect(test56.anchor).toEqual("");
expect(test56.query).toEqual("");
expect(test56.file).toEqual("");
expect(test56.dir).toEqual("");
expect(test56.path).toEqual("");
expect(test56.relative).toEqual("");
expect(test56.port).toEqual("81");
expect(test56.host).toEqual("host.com");
expect(test56.password).toEqual("");
expect(test56.user).toEqual("user");
expect(test56.authLogin).toEqual("user");
expect(test56.authDomain).toEqual("user@host.com:81");
expect(test56.protocol).toEqual("");
expect(test56.source).toEqual("user@host.com:81");
expect(test56.queries).toEqual({});
expect(test56.anchors).toEqual("");
expect(test56.dirs).toEqual("");
expect(test56.paths).toEqual("");
});

it("expect user@host.com/ to be successfully parsed", function(){

var test57 = parsely(testUrls[57]); 
expect(test57.anchor).toEqual("");
expect(test57.query).toEqual("");
expect(test57.file).toEqual("");
expect(test57.dir).toEqual("/");
expect(test57.path).toEqual("/");
expect(test57.relative).toEqual("/");
expect(test57.port).toEqual("");
expect(test57.host).toEqual("host.com");
expect(test57.password).toEqual("");
expect(test57.user).toEqual("user");
expect(test57.authLogin).toEqual("user");
expect(test57.authDomain).toEqual("user@host.com");
expect(test57.protocol).toEqual("");
expect(test57.source).toEqual("user@host.com/");
expect(test57.queries).toEqual({});
expect(test57.anchors).toEqual("");
expect(test57.dirs).toEqual("");
expect(test57.paths).toEqual("");
});

it("expect user@host.com/file.ext to be successfully parsed", function(){

var test58 = parsely(testUrls[58]); 
expect(test58.anchor).toEqual("");
expect(test58.query).toEqual("");
expect(test58.file).toEqual("file.ext");
expect(test58.dir).toEqual("/");
expect(test58.path).toEqual("/file.ext");
expect(test58.relative).toEqual("/file.ext");
expect(test58.port).toEqual("");
expect(test58.host).toEqual("host.com");
expect(test58.password).toEqual("");
expect(test58.user).toEqual("user");
expect(test58.authLogin).toEqual("user");
expect(test58.authDomain).toEqual("user@host.com");
expect(test58.protocol).toEqual("");
expect(test58.source).toEqual("user@host.com/file.ext");
expect(test58.queries).toEqual({});
expect(test58.anchors).toEqual("");
expect(test58.dirs).toEqual("");
expect(test58.paths).toEqual(["file.ext"]);
});

it("expect user@host.com?query to be successfully parsed", function(){

var test59 = parsely(testUrls[59]); 
expect(test59.anchor).toEqual("");
expect(test59.query).toEqual("query");
expect(test59.file).toEqual("");
expect(test59.dir).toEqual("");
expect(test59.path).toEqual("");
expect(test59.relative).toEqual("?query");
expect(test59.port).toEqual("");
expect(test59.host).toEqual("host.com");
expect(test59.password).toEqual("");
expect(test59.user).toEqual("user");
expect(test59.authLogin).toEqual("user");
expect(test59.authDomain).toEqual("user@host.com");
expect(test59.protocol).toEqual("");
expect(test59.source).toEqual("user@host.com?query");
expect(test59.queries).toEqual({ query : '' });
expect(test59.anchors).toEqual("");
expect(test59.dirs).toEqual("");
expect(test59.paths).toEqual("");
});

it("expect user@host.com#anchor to be successfully parsed", function(){

var test60 = parsely(testUrls[60]); 
expect(test60.anchor).toEqual("anchor");
expect(test60.query).toEqual("");
expect(test60.file).toEqual("");
expect(test60.dir).toEqual("");
expect(test60.path).toEqual("");
expect(test60.relative).toEqual("#anchor");
expect(test60.port).toEqual("");
expect(test60.host).toEqual("host.com");
expect(test60.password).toEqual("");
expect(test60.user).toEqual("user");
expect(test60.authLogin).toEqual("user");
expect(test60.authDomain).toEqual("user@host.com");
expect(test60.protocol).toEqual("");
expect(test60.source).toEqual("user@host.com#anchor");
expect(test60.queries).toEqual({});
expect(test60.anchors).toEqual(["anchor"]);
expect(test60.dirs).toEqual("");
expect(test60.paths).toEqual("");
});

it("expect user:pass@host.com:81/direc.tory/file.ext?query=1&test=2#anchor to be successfully parsed", function(){

var test61 = parsely(testUrls[61]); 
expect(test61.anchor).toEqual("anchor");
expect(test61.query).toEqual("query=1&test=2");
expect(test61.file).toEqual("file.ext");
expect(test61.dir).toEqual("/direc.tory/");
expect(test61.path).toEqual("/direc.tory/file.ext");
expect(test61.relative).toEqual("/direc.tory/file.ext?query=1&test=2#anchor");
expect(test61.port).toEqual("81");
expect(test61.host).toEqual("host.com");
expect(test61.password).toEqual("pass");
expect(test61.user).toEqual("user");
expect(test61.authLogin).toEqual("user:pass");
expect(test61.authDomain).toEqual("user:pass@host.com:81");
expect(test61.protocol).toEqual("");
expect(test61.source).toEqual("user:pass@host.com:81/direc.tory/file.ext?query=1&test=2#anchor");
expect(test61.queries).toEqual({ query : '1', test : '2' });
expect(test61.anchors).toEqual(["anchor"]);
expect(test61.dirs).toEqual(["direc.tory"]);
expect(test61.paths).toEqual(["direc.tory","file.ext"]);
});



});