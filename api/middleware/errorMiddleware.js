import { service } from "../../src/container";

export const errorMiddleware = (error, req, res, next) => {

    service.logger.error("generic.error", { error });

    res.status(500);
    res.json({
        code: error.code,
        error: error.message
    });
}