export const accountResponse = (account, user) => {
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
    };
};