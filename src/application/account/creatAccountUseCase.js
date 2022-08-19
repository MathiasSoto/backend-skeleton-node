import { repository, service } from "../../container";
import schema from "joi";
import { database } from "../../../config/database";

export const validator = schema.object({
    accountName: schema.string().required(),
    firstName: schema.string().required(),
    lastName: schema.string().required(),
    email: schema.string().email().required(),
    password: schema.string().alphanum().min(8).required()
});

export const createAccount = async (data) => {

    const logger = service.logger;
    const transaction = await database.transaction();

    try {

        const account = (await repository.accounts.createAccount({
            name: data.accountName
        }, transaction)).toJSON();

        logger.info("create.account.step1", { account });

        // TODO: Antes de crear el usuario validar si ya no existe uno con el mismo email
        const user = (await repository.users.createUser({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: await service.security.hashPassword(data.password)
        }, transaction)).toJSON();

        logger.info("create.account.step2", { user });

        await transaction.commit();

        return {
            account: {
                id: account.id,
                name: account.name,
                user: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }
            }
        }
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
}