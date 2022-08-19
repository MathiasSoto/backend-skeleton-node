import { database } from "../../config/database";
import { DataTypes, Model } from "sequelize";
import { Profile } from "./profile";
import { Account } from "./account";

export class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        required: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { sequelize: database, tableName: "users", modelName: "user", paranoid: true });

User.hasOne(Profile);
User.belongsTo(Account);
