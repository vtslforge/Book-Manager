import { BrowserRouter, Route, Routes } from "react-router"
import Dashboard from "./Pages/Dashboard"
import UserAddition from "./components/UserAddition"

const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Dashboard/>} ></Route>
  <Route path="/add" element={<UserAddition/>} ></Route>
</Routes>

</BrowserRouter>
</>
  )
}

export default App