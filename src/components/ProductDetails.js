import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/product-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function ProductDetails() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]);

  return (
    <>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className=" display-6 fw-bold my-4">{product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark py-2 px-4"
              onClick={() => dispatch(addToCart(product))}
              variant="primary"
            >
              Add To Cart
            </button>
            <Link className="btn btn-outline-dark ms-2 py-2 px-3" to="/cart">
              Go To Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
