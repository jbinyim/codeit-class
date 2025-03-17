import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);
  const [isMode, setIsMode] = useState(false);

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleClickBtn = () => {
    setLists([...lists, input]);
    setInput("");
  };

  const handleClickDelete = (props) => {
    setLists(lists.filter((list) => list !== props));
  };

  const handleClickPatch = () => {
    setIsMode(true);
  };

  return (
    <div>
      <div>
        <input
          className="border border-gray-500"
          value={input}
          type="text"
          onChange={handleChangeInput}
        />
        <button onClick={handleClickBtn}>등록</button>
      </div>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>
            <p>{list}</p>
            <button onClick={() => handleClickPatch(list)}>
              {isMode ? "수정취소" : "수정하기"}
            </button>
            <button onClick={() => handleClickDelete(list)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
