import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("tasks", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
