(function(global) {
	var $ = global.$;
	
	var prettyDate = {
		format: function(nowString, timeString) {
			var date = new Date(timeString || ""),
				now = new Date(nowString),
				diff = ((now.getTime() - date.getTime()) / 1000),
				dayDiff = diff / 86400,
				roundedDayDiff = dayDiff > 0 ? Math.floor(dayDiff) : Math.ceil(dayDiff);
			
			if (isNaN(roundedDayDiff) || roundedDayDiff <= -31 || roundedDayDiff >= 31) {
				return null;
			}
			
			if (!roundedDayDiff) {
				if (diff > 0) {
					if (diff < 60) {
						return "just now";
					}
					else if (diff < 120) {
						return "1 min ago";
					}
					else if (diff < 3600) {
						return Math.floor(diff / 60) + " mins ago";
					}
					else if (diff < 7200) {
						return "1 hr ago";
					}
					else if (diff < 86400) {
						return Math.floor(diff / 3600) + " hrs ago";
					}
				}
				else if (diff < 0) {
					if (diff > -60) {
						return "just now";
					}
					else if (diff > -120) {
						return "in 1 min";
					}
					else if (diff > -3600) {
						return "in " + Math.abs(Math.ceil(diff / 60)) + " mins";
					}
					else if (diff > -7200) {
						return "in 1 hr";
					}
					else if (diff > -86400) {
						return "in " + Math.abs(Math.ceil(diff / 3600)) + " hrs";
					}
				}
			}
			else if (roundedDayDiff == 1) {
				return "yesterday";
			}
			else if (roundedDayDiff == -1) {
				return "tomorrow";
			}
			else if (roundedDayDiff > 0) {
				if (roundedDayDiff < 7) {
					return roundedDayDiff + " days ago";
				}
				else if (roundedDayDiff < 31) {
					return Math.ceil(roundedDayDiff / 7) + " wks ago";
				}
			}
			else if (roundedDayDiff < 0) {
				if (roundedDayDiff > -7) {
					return "in " + Math.abs(roundedDayDiff) + " days";
				}
				else if (roundedDayDiff > -31) {
					return "in " + Math.abs(Math.floor(roundedDayDiff / 7)) + " wks";
				}
			}
			
			return null;
		},
		
		update: function(now) {
			$('a').each(function() {
				var link = $(this);
				
				if (link.attr('title')) {
					var date = prettyDate.format(now, link.attr('title'));
					if (date) {
						link.html(date);
					}
				}
			})
		}
	};
	
	global.prettyDate = prettyDate;
})(window);