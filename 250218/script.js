// url.searchParams.append("mbti", "istp");
// url.searchParams.append("limit", 50);

try {
  const url = new URL("https://learn.codeit.kr/api/color-surveys");
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
} catch (e) {
  console.log(e.message);
}

// console.log(response.status);
// console.log(response.headers);

// const url = new URL("https://learn.codeit.kr/api/color-surveys");
// url.searchParams.append("mbti", "INTP");

// const surveyData = {
//   mbti: "ENFP",
//   colorCode: "#CA6952",
//   password: "1234",
// };

// const res = await fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(surveyData),
// });

// const data = await res.json();

// js 객체를 json문자열로 변환
// JSON.stringify()

// json문자여을 js 객채로 변환
// JSON.parse()

// const pw = {
//   password: "1234",
// };
// url.searchParams.append("password", pw.password);
// const dlt = await fetch(url, {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const data = await dlt.json();

// console.log(data);
