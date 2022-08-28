import { repository, service } from "../../container";
import { AuthenticationError } from "../../error/authenticationError";
import schema from "joi";

export const validator = schema.object({
    email: schema.string().email().required(),
    password: schema.string().alphanum().min(8).required()
});

export const authenticate = async (email, password) => {
    const user = await repository.users.getUserByEmail(email);
    if (user && await service.security.comparePassword(password, user.password)) {
        service.logger.info("user.authenticated", user.toJSON);
        return await generateToken(user);
    }

    throw new AuthenticationError();
}

const generateToken = async (user) => {
    const payload = {
        id: user.id,
        email: user.email
    };
    return await service.jwt.createToken(payload);
}