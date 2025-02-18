import axios from "axios";

// const res = await axios.get(url, { params });
// const { data } = res;

// const surveyData = {
//   mbti: "istp",
//   colorCode: "#CA6952",
//   password: "1234",
// };
// const res = await axios.post(url, surveyData);
// const { data } = res;
// console.log(data);

const instance = axios.create({
  baseURL: `https://learn.codeit.kr/api/color-surveys`,
});

const handleError = (func) => {
  try {
    return func();
  } catch (e) {
    if (e.response) {
      console.log(e.response.status);
      console.log(e.response.data);
    } else {
      console.log("requsest failed");
    }
  }
};

// 여러개 조회
export const getSurveys = async (params) => {
  const res = await instance.get("/", { params });
  return res.data;
};

// 생성
export const createSurveys = async (data) => {
  const res = await instance.post("/", data);
  return res.data;
};

// 하나만 보기
export const getSurvey = async (id) => {
  const res = await instance.get(`/${id}`);
  return res.data;
};

// 삭제
export const deleteSurvey = async (id, password) => {
  const res = await instance.delete(`/${id}`, { password });
  return res.data;
};

// 수정
export const updateSurvey = async (id, params) => {
  const res = await instance.patch(`/${id}`, params);
  return res.data;
};

// const surveys = await getSurveys({
//   mbti: "istp",
//   limit: 50,
// });

// const createSurtvey = await createSurveys({
//   mbti: "istp",
//   colorCode: "#CA6952",
//   password: "1234",
// });

// const survey = await getSurvey(15);

// const dltSurvey = await deleteSurvey(14, "0123");

// const update = await updateSurvey(14, {
//   mbti: "istj",
//   colorCode: "#000000",
//   password: "0123",
// });

// console.log(surveys);
// console.log(createSurtvey);
// console.log(survey);
// console.log(dltSurvey);
// console.log(update);
