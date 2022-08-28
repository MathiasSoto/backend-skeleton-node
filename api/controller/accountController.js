import { createAccount, validator } from "../../src/acctions/account/creatAccountAcction";
import { validate } from "../utils/schemaValidator";

export const post = async (request, response, next) => {
    try {

        const data = validate(validator, request.body);
        const account = await createAccount(data);
        response.json({ message: "Account created successful", data: account });
    } catch (e) {
        next(e);
    }
}