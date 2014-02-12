(function(global) {
	var $ = global.$,
		QUnit = global.QUnit;
	
	QUnit.test("prettyDate.format", function() {
		function date(then, expected) {
			QUnit.equal(prettyDate.format("2008/01/28 22:25:00", then), expected);
		}
		
		date("2008/01/28 22:24:30", "just now");
		date("2008/01/28 22:23:30", "1 min ago");
		date("2008/01/28 21:23:30", "1 hr ago");
		date("2008/01/27 22:23:30", "yesterday");
		date("2008/01/26 22:23:30", "2 days ago");
		date("2007/01/26 22:23:30", null);
	});
	
	QUnit.test("prettyDate.update", function() {
		var links = $('#qunit-fixture .time a')
		
		QUnit.equal(links[0].innerHTML, "January 28th, 2008");
		QUnit.equal(links[1].innerHTML, "January 27th, 2008");
		prettyDate.update("2008-01-28T22:25:00Z");
		QUnit.equal(links[0].innerHTML, "2 hrs ago");
		QUnit.equal(links[1].innerHTML, "yesterday");
	});
	
	QUnit.test("prettyDate.update, one day later", function() {
		var links = $('#qunit-fixture .time a')
		
		QUnit.equal(links[0].innerHTML, "January 28th, 2008");
		QUnit.equal(links[1].innerHTML, "January 27th, 2008");
		prettyDate.update("2008/01/29 22:25:00");
		QUnit.equal(links[0].innerHTML, "yesterday");
		QUnit.equal(links[1].innerHTML, "2 days ago");
	});
})(window);

