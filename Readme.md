
# si-prefix

  SI prefixes (Metric prefix) http://en.wikipedia.org/wiki/Metric_prefix

## Installation

    $ component install karlbohlmark/si-prefix

## Example

```js
var prefix = require('si-prefix');
prefix(10000)
// => "10k"

prefix(0.0001)
// => "100μ"
```)

prefix.parts(48000000)
// => [48, 'M']
```)

## License

  MIT
