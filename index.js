var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];
var len = prefixes.length;

function prefixFormat(val) {
	var maxDigits = 3;

	var result;
	var formatted = val;

	function tooSmall() {
		return formatted <1 && (result = 'small');
	}

	function tooBig() {
		return formatted >= Math.pow(10, maxDigits) && (result = 'big');
	}

	function nextCandidate() {
		return Math.floor((smallest + highest) / 2);
	}

	function format(v, candidate) {
		return v / Math.pow(10, (candidate-8) * 3);
	}

	function bisect(low, high) {
		var curr = next();
		function next() {
			return Math.floor((low + high)/2);
		}
		return {
			high: function () {
				high = curr;
				return (curr = next());
			},
			low: function() {
				low = curr;
				return (curr = next());
			},
			valueOf: function () { return curr; }
		};
	}

	search = bisect(0, len);

	do {
		if (result == "small") {
			search.high();
		}
		if (result == "big") {
			search.low();
		}
		
		formatted = format(val, search.valueOf());

	} while ( tooBig() || tooSmall() );

	return [formatted, prefixes[search.valueOf()]];
}

function parts(val) {
	return prefixFormat(val);
}

function format(val) {
	return prefixFormat(val).join('');
}

module.exports = format;