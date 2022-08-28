import bcrypt from "bcrypt";

(async () => {

    const tokenSecret = await bcrypt.hash(Date.now().toString(), 10);
    console.log("⚡️‍️ TokenSecret created successfully : ", tokenSecret);
})();
