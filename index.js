var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];
var len = prefixes.length;

function prefixFormat(val) {
	var expo = val.toExponential();
	var parts = expo.split( 'e' );
	var exp = ~~parts[1];
	var index = Math.floor(exp / 3);
	
	var shift = exp - 3 * index;

	return [parts[0] * Math.pow(10, shift),
		prefixes[index + 8]];
}

function parts(val) {
	return prefixFormat(val);
}

function format(val) {
	return prefixFormat(val).join('');
}

module.exports = format;
module.exports.parts = parts;
