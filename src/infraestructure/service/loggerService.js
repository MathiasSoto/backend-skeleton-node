import winston from "winston";
import { loggerOptions } from "../../../config/logger";

const logger = winston.createLogger(loggerOptions);

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export const info = (message, context = {}) => {
    logger.info(message, context);
}

export const warning = (message, context = {}) => {
    logger.warning(message, context);
}

export const debug = (message, context = {}) => {
    logger.debug(message, context);
}

export const error = (message, context = {}) => {
    logger.error(message, context);
}