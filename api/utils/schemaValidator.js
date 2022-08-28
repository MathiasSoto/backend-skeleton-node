import { ValidationError } from "../../src/error/validationError";

export const validate = (schema, data) => {
    const { error, value } = schema.validate(data);

    if (!error) {
        return value;
    } else {
        throw new ValidationError(error);
    }
}