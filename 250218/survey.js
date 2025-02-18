import { getSurvey, getSurveys } from "./axios.js";

const surveys = await getSurveys({
  mbti: "istp",
  limit: 50,
});

console.log(surveys);
