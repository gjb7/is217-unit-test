(function(global) {
	var $ = global.$,
		QUnit = global.QUnit;
	
	function prettyDate(nowString, timeString) {
		var date = new Date(timeString || ""),
			now = new Date(nowString),
			diff = ((now.getTime() - date.getTime()) / 1000),
			dayDiff = Math.floor(diff / 86400);
		
		if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
			return null;
		}
		
		if (!dayDiff) {
			if (diff < 60) {
				return "just now";
			}
			else if (diff < 120) {
				return "1 min ago";
			}
			else if (diff < 3600) {
				return Math.floor(diff / 6) + " mins ago";
			}
			else if (diff < 7200) {
				return "1 hr ago";
			}
			else if (diff < 86400) {
				return Math.floor(diff / 3600) + "hrs ago";
			}
		}
		else if (dayDiff == 1) {
			return "yesterday";
		}
		else if (dayDiff < 7) {
			return dayDiff + " days ago";
		}
		else if (dayDiff < 31) {
			return Math.ceil(dayDiff / 7) + " wks ago";
		}
		
		return null;
	}
	
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

