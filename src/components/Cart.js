import { Container, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clear } from "../rtk/slices/cart-slice";
import "./css/cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <Container className="text-center">
      <h1 className="display-4 mt-5 mb-0">Welcome to Cart</h1>

      <h4 className="py-5">Total Price : {totalPrice.toFixed(2)} $</h4>
      <Button
        className="mb-5 btn btn-outline-dark"
        variant=""
        onClick={() => {
          dispatch(clear());
        }}
      >
        Clear Cart
      </Button>

      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <Image
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{product.price} $</td>
                <td>{product.quantity}</td>
                <td>
                  <Button
                    className="btn btn-outline-danger"
                    variant=""
                    onClick={() => {
                      dispatch(removeFromCart(product));
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Cart;
