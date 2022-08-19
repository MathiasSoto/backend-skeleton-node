import { Account, Profile, User } from "../../model";

export const getUserByEmail = async (email) => {
    return await User.findOne({
        where: {
            email,
            active: true
        },
        include: [{
            model: Account,
            where: {
                active: true
            }
        },
        {
            model: Profile
        }]
    });
};

export const createUser = async (data, transaction = null) => {
    const user = await User.create(data, { transaction });
    await createProfile({}, transaction);
    return user;
}

export const createProfile = async (data, transaction = null) => {
    const profile = await Profile.create(data, { transaction });
    return profile;
}