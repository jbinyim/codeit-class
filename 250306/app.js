import express from "express";
import mockTasks from "./data/mock.js";
import mongoose from "mongoose";
import { DATBASE_URL } from "./env.js";
import { Task } from "./models/Task.js";

const asyncHandler = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (e) {
      switch (e.name) {
        case "ValidationError":
          res.status(400).send({ message: e.message });
          break;
        case "CastError":
          res.status(404).send({ message: "Cannot find given id" });
          break;
        default:
          res.status(500).send({ message: e.message });
          break;
      }
      console.log(e.name);
      console.log(e.message);
    }
  };
};

const app = express();
app.use(express.json()); // => 미들웨어 middleware
// express.json(): 헤더의 content-type이 application/json이라면 body를 파싱해주는 미들웨어
// req.body

// -------------------------전체 조회---------------------------------
app.get(
  "/tasks",
  asyncHandler(async (req, res) => {
    const sort = req.query.sort;
    const count = Number(req.query.count) || 0;

    // const compareFn =
    //   sort === "oldest"
    //     ? (a, b) => a.createdAt - b.createdAt
    //     : (a, b) => b.createdAt - a.createdAt;

    // let newTasks = mockTasks.sort(compareFn);

    // if (count) {
    //   newTasks = newTasks.slice(0, count);
    // }

    //"asc" -> 오름차순 "desc" -> 내림차순
    const sortOption = {
      createdAt: sort === "oldest" ? "asc" : "desc",
    };

    const tasks = await Task.find().sort(sortOption).limit(count);

    res.send(tasks);
  })
);

// -------------------------한개 조회---------------------------------
app.get(
  "/tasks/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);

    if (!task) {
      res.status(404).send({ message: "Cannot find given id" });
    }

    res.send(task);
  })
);

// -------------------------생성 하기---------------------------------
app.post(
  "/tasks",
  asyncHandler(async (req, res) => {
    // const newTask = req.body;

    // const ids = mockTasks.map((task) => task.id);
    // newTask.id = Math.max(...ids) + 1;
    // newTask.isComplete = false;
    // newTask.createdAt = new Date();
    // newTask.updatedAt = new Date();
    // mockTasks.push(newTask);

    const task = await Task.create(req.body);

    res.status(201).send(task);
  })
);

// -------------------------수정 하기---------------------------------
app.patch(
  "/tasks/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    // const patchTask = req.body;

    // const taskIndex = mockTasks.findIndex((task) => task.id === id);

    // if (taskIndex === -1) {
    //   return res.status(404).send({ message: "Cannot find given id" });
    // }

    // mockTasks[taskIndex] = {
    //   ...mockTasks[taskIndex],
    //   ...patchTask,
    //   updatedAt: new Date(),
    // };

    const task = await Task.findById(id);

    if (!task) {
      res.status(404).send({ message: "Cannot find given id" });
    }

    Object.keys(req.body).forEach((key) => {
      task[key] = req.body[key];
    });

    await task.save();

    res.status(201).send(task);
  })
);

// -------------------------삭제하기---------------------------------
app.delete(
  "/tasks/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    // const index = mockTasks.findIndex((task) => task.id === id);

    // mockTasks.splice(index, 1); // index부터 1개 지워라.

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).send({ message: "Cannot find given id" });
    }

    res.sendStatus(204); // 응답은 완료했는데 돌려줄 컨텐츠가 없을 경우204
  })
);

mongoose.connect(DATBASE_URL).then(() => console.log("Connected"));

app.listen(5000, () => {
  console.log("Sever started");
});
