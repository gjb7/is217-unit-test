(function(global) {
	var $ = global.$;
	
	function prettyDate(time) {
		var date = new Date(time || ""),
			now = new Date(),
			diff = ((now.getTime() - date.getTime()) / 1000),
			dayDiff = Math.floor(diff / 86400);
		
		if (isNaN(dayDiff)) || dayDiff < 0 || dayDiff >= 31) {
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
	
	$(function() {
		$('a').each(function() {
			var link = $(this);
			if (link.attr('title')) {
				var date = prettyDate(link.attr('title'));
				if (date) {
					link.html(date);
				}
		});
	});
})(window);

