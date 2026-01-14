import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cart-slice";
import "./css/product-details.css";

function ProductDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.productId]);

  return (
    <div className="product-details container py-5">
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-12 col-md-6 text-center">
          <div className="image-container">
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <h4 className="product-category">{product.category}</h4>
          <h1 className="product-title">{product.title}</h1>
          <p className="product-rating">
            Rating: {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="product-price">{product.price}$</h3>
          <p className="product-description">{product.description}</p>

          <div className="buttons mt-4">
            <button
              className="btn-add"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
            <Link className="btn-go-cart" to="/cart">
              Go To Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
