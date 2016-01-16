# node-es-logger v0.3.0

This module creates a [bunyan](https://github.com/trentm/node-bunyan) logger instance with an output stream bound to [elasticsearch](https://github.com/elasticsearch/elasticsearch) instance with [logstash](https://github.com/elasticsearch/logstash) compatible JSON format.

## Options
* **name (required)**: Bunyan log name
* host: Elasticsearch host. Defaults to `localhost:9200`
* type: String or function, Elasticsearch `type` for log entry to be stored under
* client: Elasticsearch client. See [elasticsearch-js](https://github.com/elastic/elasticsearch-js) for more details. Useful when custom client options are needed, like setting the Elasticsearch client log level. When used, `host` is ignored
* indexPattern: Pattern used to generate index name. See [momentjs](http://momentjs.com/docs/#/displaying/) for more details. Defaults to `[logstash-]YYYY.MM.DD`
* index: String or function, Elasticsearch index to store log entry under. When used, `indexPattern` is ignored
* serializers: Array of objects, bunyan serializers. See [node-bunyan](https://github.com/trentm/node-bunyan#serializers) for more details. Defaults to standard serializers
* quiet: Boolean, whether to add the stdout stream to the logger
 

## Minimal Example

```js
var logger = require('es-logger').create({

    name: 'myapp'

});

logger.info({value: 123}, 'message');
```

This prints a JSON and also send it to elasticsearch instance at `localhost:9200`.


## Example with `type` from function

```js
var logger = require('es-logger').create({

    name: 'myapp',
    host: 'elasticsearch:9200',
    type: function (entry) {
        return entry['type'];
    }
});

logger.info({type: "request", method: "GET"});
```


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

