(function(global) {
	var $ = global.$,
		QUnit = global.QUnit;
	
	QUnit.test("prettydate basics", function() {
		function date(then, expected) {
			QUnit.equal(prettyDate("2008/01/28 22:25:00", then), expected);
		}
		
		date("2008/01/28 22:24:30", "just now");
		date("2008/01/28 22:23:30", "1 min ago");
		date("2008/01/28 21:23:30", "1 hr ago");
		date("2008/01/27 22:23:30", "yesterday");
		date("2008/01/26 22:23:30", "2 days ago");
		date("2007/01/26 22:23:30", null);
	});
})(window);

