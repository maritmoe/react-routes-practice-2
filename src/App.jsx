import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { appsData, productsData } from "./data.js";
import Home from "./pages/Home/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import ViewProductPage from "./pages/ViewProduct/ViewProductPage";
import EditProduct from "./pages/EditProduct/EditProduct.jsx";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [apps, setApps] = useState(appsData);

  console.log({ products, apps });

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/products/:id/edit"
          element={
            <EditProduct products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/products/:id"
          element={<ViewProductPage products={products} />}
        />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
