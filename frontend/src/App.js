import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Business from "./pages/Business";
import Interface from "./pages/Interface";
import BusinessInterface from "./pages/BusinessInterface";
import Customer from "./pages/Customer";
import Welcome from "./pages/Welcome";
import RestaurantPage from "./pages/RestaurantPage";
import MyReviews from "./pages/MyReviews";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/interface" element={<Interface />}></Route>
        <Route
          path="/interface/business/:id"
          element={<RestaurantPage />}
        ></Route>
        <Route
          path="/businessinterface"
          element={<BusinessInterface />}
        ></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/interface/myreviews" element={<MyReviews />}></Route>
      </Routes>
    </div>
  );
}

export default App;
