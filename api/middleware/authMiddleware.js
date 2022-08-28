import { service } from "../../src/container";

export const authenticationMiddleware = (request, response, next) => {

    const authenticationRoutes = [
        '/api/v1/auth'
    ];

    if (!authenticationRoutes.includes(request.url)) {
        validate(request, response, next);
    } else {
        next();
    }
}

const validate = (request, response, next) => {
    const token = request?.header('Authorization');
    if (!token) return response.status(401).json({ error: "Access denied" });
    try {
        const verified = service.jwt.validateToken(token);
        request.user = verified;
        next();
    } catch (error) {
        response.status(400).json({ error: 'Token not valid' });
    }
}