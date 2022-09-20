import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../../Context/Context";
import { AiFillDelete } from "react-icons/ai";
function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shop-A-Thon</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="m-auto"
            placeholder="Search any product"
            style={{ width: 500 }}
            onChange={(index) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: index.target.value,
              })
            }
          ></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="success">{cart.length}</Badge>

              <Dropdown.Menu style={{ minWidth: 400 }}>
                {cart.length ? (
                  <>
                    {cart.map((i) => (
                      <span className="cartItem" key={i.id}>
                        <img
                          src={i.image}
                          className="cartImg"
                          alt={i.name}
                        ></img>
                        <div className="cartItemDetails">
                          <span>{i.name} </span>
                          <span> ₹{i.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize={"20px"}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            dispatch({ type: "REMOVE_FROM_CART", payload: i });
                          }}
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "100%" }}>Go TO Cart Page</Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart Is Empty</span>
                )}
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
