import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { Dialect } from "sequelize";
export const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? "3306", 10),
  dialect: process.env.DB_TYPE as Dialect,
  database: process.env.DB_NAME || "belajar_typescript",
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
};