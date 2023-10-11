import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";
import { products } from "../redux/products";
import ProductCard from "./ProductCard";

// This is HomePage Component used to display the product in the card
// with the help of ProductCard component

const HomePage = ({ addToCart }) => {
  return (
    <section className="py-5">
      <div className="container px-3 px-lg-3 mt-0">
        <div className="row gx-3 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-start">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default connect(null, { addToCart })(HomePage);
