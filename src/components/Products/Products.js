import { useState } from "react";
import Product from "./Product";

function Products(props) {
  return (
    <section className="products">
      <Product product={props.product} func={props.func} />
    </section>
  );
}
export default Products;
