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
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="buttons justify-content-center d-flex"
            style={{ marginBottom: "100px" }}
          >
            <button
              className="btn btn-outline-dark "
              onClick={() => {
                getProducts();
              }}
            >
              All
            </button>

            {categories.map((cat) => {
              return (
                <button
                  className="btn btn-outline-dark ms-2"
                  key={cat}
                  onClick={() => {
                    getProductInCategory(cat);
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="row">
          {products.map((product) => {
            return (
              <div
                className="col-lg-3 text-center col-md-4 col-sm-6 mb-4"
                key={product.id}
              >
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
