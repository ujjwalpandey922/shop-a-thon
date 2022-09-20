import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routers>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Routers>
  );
}

export default App;
