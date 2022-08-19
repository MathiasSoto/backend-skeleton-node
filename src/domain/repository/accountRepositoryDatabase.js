import { database } from "../../../config/database";
import { Account } from "../../model";

export const createAccount = async (data, transaction = null) => {
    const account = await Account.create(data, { transaction });
    return account;
}