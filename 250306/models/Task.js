import mongoose from "mongoose";

const Taskschema = new mongoose.Schema(
  {
    // _id 자동으로 생성해준다.

    title: {
      type: String,
      required: true,
      maxLength: 30,
      validate: {
        validator: (title) => title.split(" ").length > 1,
        message: "2단어 이상 입력하세요",
      },
    },
    description: {
      type: String,
    },
    isComplete: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true, // createAt, updateAt이 자동으로 생성이 된다.
  }
);

export const Task = mongoose.model("Task", Taskschema);
