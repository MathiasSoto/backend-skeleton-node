import schema from "joi";

import { repository, service } from "../../container";
import { database } from "../../../config/database";
import { accountResponse } from "../../../api/views/accountResponse";

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

        if (await repository.users.getUserByEmail(data.email)) {
            throw new Error("User's email already exists");
        }
        
        const user = (await repository.users.createUser({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: await service.security.hashPassword(data.password)
        }, transaction)).toJSON();

        logger.info("create.account.step2", { user });

        await transaction.commit();

        return accountResponse(account, user);

    } catch (error) {
        await transaction.rollback();
        throw error;
    }
}