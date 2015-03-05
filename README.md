# node-es-logger v0.2.0

This module creates a [bunyan](https://github.com/trentm/node-bunyan) logger instance with an output stream bound to [elasticsearch](https://github.com/elasticsearch/elasticsearch) instance with [logstash](https://github.com/elasticsearch/logstash) compatible JSON format.


## Example

```js
var logger = require('es-logger').create({

    name: 'myapp',
    host: 'localhost:9200'

});

logger.info({value: 123}, 'message');
```

This prints a JSON and also send it to elasticsearch instance at `localhost:9200`.


### Use with [bonsai.io](https://bonsai.io/).

```js
var logger = require('es-logger').create({

    name: 'myapp',
    host: 'username:password@myapp-name-123456789.us-west-2.bonsai.io'

});

logger.info({value: 123}, 'message');
```

This prints a JSON and also send it to *bonsai*'s elasticsearch instance at `myapp-name-123456789.us-west-2.bonsai.io`.


see [bunyan's README](https://github.com/trentm/node-bunyan#log-method-api) for what interfaces the `logger` has.
