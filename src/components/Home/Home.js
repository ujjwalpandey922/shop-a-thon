import React from "react";
import { CartState } from "../../Context/Context";
import Filters from "../Filters/Filters";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Home.css";
function Home() {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, sort, searchQuery },
  } = CartState();
  const filteredProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "LowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((p) => p.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((p) => p.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((p) => p.rating >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {filteredProducts().map((items) => {
          return <SingleProduct items={items} key={items.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
