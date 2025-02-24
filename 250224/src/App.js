import Hello from "./Hello";

function App() {
  const name = "react";

  const handleClick = () => {
    alert("반갑습니다.");
  };

  return (
    <div>
      <Hello />
      <button onClick={handleClick}>확인</button>
      <div>hello {name}</div>
      <img src="" />
    </div>
  );
}

export default App;
