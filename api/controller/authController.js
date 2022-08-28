import { authenticate, validator } from "../../src/acctions/auth/authenticationAcction";
import { validate } from "../utils/schemaValidator";

export const post = async (request, response, next) => {
    try {

        const data = validate(validator, request.body);
        const token = await authenticate(data.email, data.password);
        response.json({ message: "Authenticate successful", token });

    } catch (e) {
        next(e);
    }
}