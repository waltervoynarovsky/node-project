import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Task = sequelize.define(
  "Task",
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
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    complete_by: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    completion_time: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
