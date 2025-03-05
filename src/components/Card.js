import { Link } from "react-router-dom";

function Card(props) {
  const { product, showButton } = props;

  return (
    <div className="card h-100 text-cennter p-4 ">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        height="250px"
      />
      <div className="card-body">
        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
        <p>Price : {product.price}</p>
        {showButton && (
          <Link className="btn btn-primary" to={`/product/${product.id}`}>
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
