function MyCart(props) {
  return props.product.map((list, index) => (
    <div key={index} className="product-card">
      <div className="product-image">
        <img src={list.image} />
      </div>
      <div className="product-info">
        <h5>{list.title}</h5>
        <h6>{list.price}</h6>
      </div>
    </div>
  ));
}
export default MyCart;
