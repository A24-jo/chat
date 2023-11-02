import "reflect-metadata"
import { DataSource } from 'typeorm';
import { config as loadEnviromentVars } from "dotenv";

loadEnviromentVars()
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: +process.env.MYSQL_PORT!,
    database: process.env.MYSQL_DATABASE,
    entities: ["src/entities/*.ts"],
    logging: false,
    synchronize: true
});
