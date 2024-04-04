import { Sequelize } from "sequelize";
import "dotenv/config"

const sequelize = new Sequelize(process.env.DB_URL)

const testConneciton = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error){
        console.log("Conexão mal sucessida!"  + error);
    }
}

export { sequelize, testConneciton };