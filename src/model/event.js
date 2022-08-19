import { database } from "../../config/database";
import { DataTypes, Model } from "sequelize";
import { EventDescription } from "./eventDescription";
import { Participant } from "./participant";
import { Program } from "./program";

export class Event extends Model { }

Event.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.TEXT
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { sequelize: database, tableName: "events", modelName: "event", paranoid: true });

Event.hasOne(EventDescription);
Event.hasMany(Participant);
Event.hasMany(Program);