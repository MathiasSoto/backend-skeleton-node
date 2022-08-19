import { User, Profile, Account } from "../src/model";
import { service } from "../src/container";

(async () => {

    // Create new Account
    const account = await Account.create({
        name: "God account by admin"
    });

    // Create new User
    const password = await service.security.hashPassword("12345678");
    const user = await User.create({
        firstName: "God",
        lastName: "",
        email: "admin@admin.com",
        password,
        accountId: account.id
    });

    // Create new Profile
    await Profile.create({
        userId: user.id
    });

    console.log("👮‍️ User admin created successfully.");
})();
