import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Task = sequelize.define(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    task_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    priority: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
