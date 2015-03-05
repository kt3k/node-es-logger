

var bunyan = require('bunyan');
var ElasticsearchStream = require('bunyan-elasticsearch');


/**
 * Creates bunyan logger bound to elasticsearch output.
 *
 * @param {Object} opts
 * @param {String} opts.name The log name
 * @param {String} opts.host The hostname of elasticsearch cluster
 * @param {String} opts.indexPattern
 * @param {String} opts.type
 * @param {Boolean} opts.quiet
 */
module.exports.create = function (opts) {
    'use strict';

    opts = opts || {};

    if (opts.host == null) {
        throw new Error('es-logger: `host` parameter is required');
    }

    if (opts.name == null) {
        throw new Error('es-logger: `name` parameter is required');
    }


    esStream = new ElasticsearchStrean({

        indexPattern: opts.indexPattern || '[logstash-]YYYY.MM.DD',
        type: opts.type || 'logs',
        host: opts.host

    });

    var streams = [{

        stream: esStream

    }];

    if (!opts.quiet) {

        stream.push({

            stream: process.stdout

        });

    }

    var logger = bunyan.createLogger({

        name: opts.name,
        streams: streams,
        serializers: bunyan.stdSerializers

    });

    return logger;

};
