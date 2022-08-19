import { database } from "../../config/database";
import { DataTypes, Model } from "sequelize";

export class EventDescription extends Model { }

EventDescription.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start_dt: {
        type: "TIMESTAMP",
        required: true
    },
    end_dt: {
        type: "TIMESTAMP",
        required: true
    },
    latitude: {
        type: DataTypes.STRING
    },
    longitude: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING,
        required: true
    },

}, { sequelize: database, tableName: "event_descriptions", modelName: "event_description", paranoid: true });
