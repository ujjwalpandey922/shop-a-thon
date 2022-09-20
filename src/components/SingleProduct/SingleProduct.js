import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../Context/Context";
import Rating from "../Rating/Rating";
import "./SingleProduct.css";
const SingleProduct = ({ items }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={items.image} alt={items.name} />
        <Card.Body className="smallDets">
          <Card.Title>{items.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <div>₹ {items.price.split(".")[0]} </div>
            {items.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Regular Delivery</div>
            )}
          </Card.Subtitle>
          <small className="text-muted">
            <Rating rating={items.rating} />
          </small>
        </Card.Body>
        <Card.Footer className="footer">
          {cart.some((p) => p.id === items.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: items });
              }}
            >
              {" "}
              Remove From Cart
            </Button>
          ) : (
            <Button
              disabled={!items.inStock}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: items });
              }}
            >
              {items.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SingleProduct;
