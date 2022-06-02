import { useContext } from "react";
import { UserContext } from "../context/ProdactContex";

function MyCart(props) {
  const contex = useContext(UserContext);

  return props.cart.map((list, index) => (
    <div key={index} className="cart-card">
      <div className="cart-image">
        <img src={list.image} />
      </div>
      <div className="cart-info">
        <h5>{list.title}</h5>
        <h6>{list.price}</h6>
      </div>
    </div>
  ));
}
export default MyCart;
