

var bunyan = require('bunyan');
var ElasticsearchStream = require('bunyan-elasticsearch-updated');


/**
 * Creates bunyan logger bound to elasticsearch output.
 *
 * @param {Object} opts
 * @param {String} opts.name The log name
 * @param {String} opts.host The hostname of elasticsearch cluster
 * @param {String} opts.client Elasticsearch client. Overrides opts.host
 * @param {String} opts.indexPattern
 * @param {(String|function)} opts.index Overrides opts.indexPattern
 * @param {(String|function)} opts.type
 * @param {Object[]} opts.serializers Bunyan serializers
 * @param {Boolean} opts.quiet
 */
module.exports.create = function (opts) {
    'use strict';

    opts = opts || {};

    if (!opts.name) {
        throw new Error('es-logger: `name` parameter is required');
    }

    var esStream = new ElasticsearchStream({

        indexPattern: opts.indexPattern || '[logstash-]YYYY.MM.DD',
        type: opts.type || 'logs',
        client: opts.client,
        index: opts.index,
        host: opts.host

    });

    var streams = [{

        stream: esStream

    }];

    if (!opts.quiet) {

        streams.push({

            stream: process.stdout

        });

    }

    var logger = bunyan.createLogger({

        name: opts.name,
        streams: streams,
        serializers: opts.serializers || bunyan.stdSerializers

    });

    return logger;

};
