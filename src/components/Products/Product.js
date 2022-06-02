import { useContext } from "react";
import { UserContext } from "../context/ProdactContex";

function Product(props) {
  const setcart = useContext(UserContext);
  function But() {
    setcart([
      {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description:
          "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: {
          rate: 3.6,
          count: 145,
        },
      },
    ]);
  }
  return props.product.map((list, index) => (
    <div key={index} className="product-card">
      <div className="product-image">
        <img src={list.image} />
      </div>
      <div className="product-info">
        <h5>{list.title}</h5>
        <h6>{list.price}</h6>
        <button onClick={But}>Add to Cart</button>
      </div>
    </div>
  ));
}

export default Product;
