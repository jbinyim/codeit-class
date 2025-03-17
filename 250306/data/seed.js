import mongoose from "mongoose";
import { DATBASE_URL } from "../env.js";
import data from "./mock.js";
import { Task } from "../models/Task.js";

mongoose.connect(DATBASE_URL);

await Task.deleteMany({});
await Task.insertMany(data);

mongoose.connection.close();
