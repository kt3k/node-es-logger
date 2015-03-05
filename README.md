# node-es-logger v0.1.0

This module creates a [bunyan](https://github.com/trentm/node-bunyan) logger instance with an output stream bound to [elasticsearch](https://github.com/elasticsearch/elasticsearch) instance with [logstash](https://github.com/elasticsearch/logstash) compatible JSON format.


## Example

```js
var logger = require('es-logger').create({

    name: 'myapp',
    host: 'localhost:9200'

});

logger.info({value: 123}, 'message');
```

This prints a JSON to stdout and also send it to elasticsearch instance at `localhost:9200`.


### Use with bonsai.io.

```
var logger = require('es-logger').create({

    name: 'myapp',
    host: 'username:password@myapp-name-123456789.us-west-2.bonsai.io'

});
```
