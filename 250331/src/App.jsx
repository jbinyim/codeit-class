import { BrowserRouter, Route, Routes } from "react-router";
import Left from "./components/Left";
import Right from "./components/Right";
import { CounterProvider } from "./contexts/counter.context";
import Layout from "./components/Layout";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import { LoggedInProvider } from "./contexts/loggedIn.context";

function App() {
  return (
    <BrowserRouter>
      <LoggedInProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/a" element={<PageA />} />
            <Route path="/b" element={<PageB />} />
            <Route path="/c" element={<PageC />} />
          </Route>
        </Routes>
      </LoggedInProvider>
    </BrowserRouter>
  );
}

export default App;
