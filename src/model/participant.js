import { database } from "../../config/database";
import { DataTypes, Model } from "sequelize";

export class Participant extends Model { }

Participant.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        required: true
    },
    lastName: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    identification_number: {
        type: DataTypes.STRING,
        required: true
    },
    validated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { sequelize: database, tableName: "participants", modelName: "participant", paranoid: true });