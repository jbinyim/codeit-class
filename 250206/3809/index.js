// 이벤트 위임 (Event Delegation)
const list = document.querySelector("#list");

// 요소 하나하나마다 클릭했을 떄 요소에 done이라는 클래스를 추가

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    e.target.classList.toggle("done");
  }
});

const li = document.createElement("li");
li.classList.add("item");
li.textContent = "일기 쓰기";
list.append(li);

// for (let item of list.children) {
//   item.addEventListener("click", (e) => {
//     e.target.classList.toggle("done");
//   });
// }
