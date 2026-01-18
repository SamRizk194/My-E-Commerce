import { useState, useEffect } from "react";
import Card from "./Card";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        <div
          className="buttons d-flex justify-content-center flex-wrap mb-4"
          style={{ gap: "10px" }}
        >
          <button className="btn btn-outline-dark" onClick={getProducts}>
            All
          </button>

          {categories.map((cat) => (
            <button
              className="btn btn-outline-dark"
              key={cat}
              onClick={() => getProductInCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              col-12
              col-sm-6
              col-md-4
              col-lg-3
              mb-4
              d-flex
              justify-content-center
              justify-content-sm-start
            "
          >
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
