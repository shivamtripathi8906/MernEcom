import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;

