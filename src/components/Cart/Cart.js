import React, { useEffect, useState } from "react";
import { Col, FormControl, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../../Context/Context";
import Rating from "../Rating/Rating";
import "./Cart.css";
function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, items) => acc + Number(items.price) * items.qty, 0)
    );
  }, [cart]);
  return (
    <div className="CartHome">
      <div className="productsList">
        <ListGroup>
          {cart.map((items) => (
            <ListGroup.Item key={items.id} className="SingleProductsList">
              <Row>
                <Col md={2}>
                  <Image src={items.image} alt={items.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{items.name}</span>
                </Col>
                <Col md={2}>
                  <span>₹ {items.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={items.rating}></Rating>
                </Col>
                <Col md={2}>
                  <FormControl
                    as="select"
                    value={items.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: { id: items.id, qty: e.target.value },
                      })
                    }
                  >
                    {[...Array(items.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </FormControl>
                </Col>
                <Col md={2}>
                  <AiFillDelete
                    fontSize={"20px"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: items });
                    }}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filter summary">
        <span className="title">Subtotal of {cart.length} Products</span>
        <span style={{ fontWeigth: 800, fontSize: 20 }}>
          Total : ₹ {total}{" "}
        </span>
      </div>
    </div>
  );
}

export default Cart;
