import { Op } from "sequelize";
import { Task } from "../models/todos.js";

export const addTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send(`Task ID: ${task.id} created`);
  } catch (error) {
    res.status(403).send(error.message);
  }
};

export const getTasks = async (req, res) => {
  const { name, priority } = req.query;

  const query = { where: {}, order: [] };
  if (name) {
    query.where.task_name = { [Op.like]: `%${name}%` };
  }

  if (priority == "asc") {
    query.order[0] = ["priority", "ASC"];
  } else if (priority == "desc") {
    query.order[0] = ["priority", "DESC"];
  } else if (priority) {
    query.where.priority = { [Op.eq]: priority };
  }

  try {
    const tasks = await Task.findAll(query);
    res.send(tasks);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const getTasksById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new Error("Task not found!");
    }
    res.send(task);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const updateTasksById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const task = await Task.update(req.body, {
      where: {
        id: id,
      },
    });

    if (task[0] === 0) {
      throw new Error("Task not found");
    }
    res.send("Task updated");
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deleteTaskById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const task = await Task.destroy({
      where: {
        id: id,
      },
    });
    if (!task) {
      throw new Error("Task not found");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
  const tasks = await Task.findAll();
  res.send(tasks);
};
