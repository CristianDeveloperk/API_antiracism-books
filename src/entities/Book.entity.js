import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connectionDB.js";

const BookEntity = database.define('Book', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    cover: {
        type: DataTypes.STRING(1024),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    publisher: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    genre: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    publicationDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    relatedLinks: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default BookEntity;