import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./Pages/Dashboard";
import UserAddition from "./components/UserAddition";
import UserEdit from "./components/UserEdit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/add" element={<UserAddition />}></Route>
          <Route path="/edit/:id" element={<UserEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
