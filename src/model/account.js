import { database } from "../../config/database";
import { DataTypes, Model } from "sequelize";

export class Account extends Model { }

Account.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { sequelize: database, tableName: "accounts", modelName: "account", paranoid: true });