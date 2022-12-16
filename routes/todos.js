//Import Router from express
import Router from "express";

//Import the read and write from FS lib
import { readFileSync, writeFileSync } from "fs";

// need to import the function getTasks

import {
  getTasks,
  addTasks,
  getTasksById,
  updateTasksById,
  deleteTaskById,
} from "../controller/tasks.js";

//Set the router and replace all the occurences of app to router
const router = Router();

// Change the endpoints to drop as we are setting the global route on index.js and these are sub routes
router.get("/", getTasks);

// added in post request to add new data and write it to the file, also check to see if the Task is already in the list
router.post("/", addTasks);

router.get("/:id", getTasksById);

router.delete("/:id", deleteTaskById);

router.put("/:id", updateTasksById);

//need to export the route
export default router;
