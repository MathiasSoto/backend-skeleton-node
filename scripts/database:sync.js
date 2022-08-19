import { database } from "../config/database";
import "../src/model";

(async () => {
    await database.sync({ force: true });
    console.log("⚡️ All models were synchronized successfully.");
})();
