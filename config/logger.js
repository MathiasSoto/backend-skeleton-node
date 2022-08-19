import winston from "winston";
import debugFormat from "winston-format-debug";
import winstonElasticsearch from "winston-elasticsearch";

const esTransportOpts = {
    level: 'info',
    indexPrefix: 'logging-api',
    indexSuffixPattern: 'YYYY-MM-DD',
    clientOpts: {
        node: process.env.ES_ADDON_URI,
        maxRetries: 5,
        requestTimeout: 10000,
        sniffOnStart: false,
        auth: {
            username: process.env.ES_ADDON_USER,
            password: process.env.ES_ADDON_PASSWORD
        }
    },
    source: process.env.LOG_SOURCE || 'api'
};
// const esTransport = new winstonElasticsearch.ElasticsearchTransport(esTransportOpts);

export const loggerOptions = {
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {},
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize({ message: true }),
                debugFormat({
                    colorizeMessage: false, // Already colored by `winston.format.colorize`.
                })
            )
        }),
        // esTransport,
        new winston.transports.File({ filename: 'api/logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'api/logs/combined.log' }),
    ],
};