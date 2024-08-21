import express from "express";
import { create } from "../controller/userController.js";
import { getAll } from "../controller/userController.js";
import { getOne } from "../controller/userController.js";
import { update } from "../controller/userController.js";
import {deleteUser} from '../controller/userController.js'
const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);
export default route;
