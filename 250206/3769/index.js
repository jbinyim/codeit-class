const myNumberTag = document.getElementById("myNumber");

// console.log(myNumberTag);

const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function () {
  myNumber--;

  // console.log(myNumber);

  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function () {
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName("color-btn");

// console.log(colorBtns);
// console.log(colorBtns[0]);

for (let btn of colorBtns) {
  btn.onclick = function () {
    myNumberTag.style.color = btn.dataset.color;
  };
}

const btns = document.getElementById("btns");

// console.log(btns.children);
// console.log(btns.parentElement);
// console.log(btns.previousElementSibling);
// console.log(btns.nextElementSibling);

// console.log(colorBtns[1].previousElementSibling);
// console.log(colorBtns[1].nextElementSibling);

// console.log(increaseBtn.parentElement.parentElement.children[1].children[3]);

const removeItem = (e) => {
  e.target.remove();
};

let list = document.getElementById("list");
const addList = document.getElementById("add-list");
list.innerHTML = "<li>Test</li>";

addList.onclick = function () {
  const newList = document.createElement("li");
  newList.textContent = new Date();

  newList.addEventListener("click", removeItem);

  // list.prepend(newList) 맨 앞 자식으로 추가
  list.append(newList); // 맨 뒤 자식으로 추가
  // list.after(newList); // 다음 형제로 추가
  // list.before(newList); // 이전 형제로 추가
};

const resetListBtn = document.getElementById("reset-list");
resetListBtn.onclick = function () {
  list.outerHTML = `<ul id="list"></ul>`;
  list = document.getElementById("list");
};

const changeListBtn = document.getElementById("change-list");
changeListBtn.onclick = function () {
  // const a = list;
  const itemsString = list.innerHTML;
  list.outerHTML = `<ol id="list"></ol>`;
  list = document.getElementById("list");
  list.innerHTML = itemsString;

  // for (let cList of a.children) {
  //   list.appendChild(cList.cloneNode(true));
  // }
};

const att1 = document.getElementById("att1");
const att2 = document.getElementById("att2");

att1.href = "https://google.com";
att2.href = "https://google.com";

console.log(att1.href);
console.log(att2.href);

att2.getAttribute("href");

// att1.style.textDecoration = "line-through";

att1.classList.add("done");
att1.classList.remove("done");
att1.classList.contains("done");

const style = document.getElementById("style");
const styleHandler = function () {
  // style.style.fontSize = "30px";
  // if (style.style.fontSize === "30px") {
  //   style.onclick = function () {
  //     style.style.color = "blue";
  //   };
  // }
  // if ((style.style.color = "blue")) {
  //   style.onclick = function () {
  //     style.style.color = "black";
  //     style.style.fontSize = "16px";
  //   };
  // }

  const isLarge = style.classList.contains("large");
  const isBlue = style.classList.contains("blue-text");

  if (!isLarge && !isBlue) {
    style.classList.add("large");
  } else if (isLarge && !isBlue) {
    style.classList.add("blue-text");
  } else {
    // style.classList.remove("large");
    // style.classList.remove("blue-text");
    // style.remove();
    list.append(style);
  }
};

style.addEventListener("click", styleHandler);
style.removeEventListener("click", styleHandler);
