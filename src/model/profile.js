import { database } from "../../config/database";
import { DataTypes, Model } from "sequelize";

export class Profile extends Model { }

Profile.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    avatar: {
        type: DataTypes.STRING
    },
}, { sequelize: database, tableName: "profiles", modelName: "profile", paranoid: true });
