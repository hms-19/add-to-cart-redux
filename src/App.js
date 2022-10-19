import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/mycart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
