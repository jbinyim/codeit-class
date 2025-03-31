import { createContext, useContext, useState } from "react";

// 만든다
const Countercontext = createContext();

// 사용한다
export const useCounter = () => useContext(Countercontext);

// 범위를 지정해서 값을 내려준다 -
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <Countercontext.Provider value={value}>{children}</Countercontext.Provider>
  );
}
