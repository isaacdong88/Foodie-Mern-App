import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Business from "./pages/Business";
import Interface from "./pages/Interface";
import Customer from "./pages/Customer";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/interface" element={<Interface />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
