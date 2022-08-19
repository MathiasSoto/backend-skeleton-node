import { database } from "../../config/database";
import { DataTypes, Model } from "sequelize";

export class Program extends Model { }

Program.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    start_dt: {
        type: "TIMESTAMP",
        required: true
    },
    end_dt: {
        type: "TIMESTAMP",
        required: true
    },
}, { sequelize: database, tableName: "programs", modelName: "program", paranoid: true });
