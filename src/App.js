import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}
export default App;
