import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { faker } from "@faker-js/faker";
import cartReducer, { productReducer } from "./Reducer";
const cart = createContext();
faker.seed(99);
function Context({ children }) {
  const products = [...Array(50)].map((item) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 9, 7, 4, 6]),
    rating: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean(),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </cart.Provider>
  );
}
export default Context;

export const CartState = () => {
  return useContext(cart);
};
