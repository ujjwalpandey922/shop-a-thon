import React from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../../Context/Context";
import Rating from "../Rating/Rating";
import "./Filters.css";
const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, byRating, sort },
    productDispatch,
  } = CartState();

  return (
    <div className="filter">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onClick={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "LowToHigh" })
          }
          checked={sort === "LowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Decending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onClick={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "HighTOLow" })
          }
          checked={sort === "HighTOLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onClick={() => productDispatch({ type: "FILTER_BY_STOCK" })}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include fast delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onClick={() => productDispatch({ type: "FILTER_BY_DELIVERY" })}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating : </label>
        <Rating
          rating={byRating}
          onClick={(index) =>
            productDispatch({ type: "FILTER_BY_RATING", payload: index + 1 })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
      >
        {" "}
        Clear Filter
      </Button>
    </div>
  );
};

export default Filters;
