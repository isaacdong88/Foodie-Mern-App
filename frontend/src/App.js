import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Login from "./pages/Login";
import Interface from "./pages/Interface";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Interface />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
