import { Link } from "react-router-dom";
import "./header.css";
function Header(props) {
  return (
    <nav className="product-filter">
      <h1>goCode shop</h1>
      <Link to="/cart">
        <label>
          <img
            className="cart"
            width="30px"
            height="30px"
            src="https://png.pngitem.com/pimgs/s/364-3641544_transparent-carrinho-de-compras-png-blue-shopping-cart.png"
          />
        </label>
      </Link>
      <Link to="/">
        <label>
          <img
            className="cart"
            width="30px"
            height="30px"
            src="https://png.pngitem.com/pimgs/s/364-3641544_transparent-carrinho-de-compras-png-blue-shopping-cart.png"
          />
        </label>
      </Link>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={(e) => props.select(e.target.value)}>
            <Filter filter={props.sortlist} />
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <Sort sort={props.sortlist} />
          </select>
        </div>
      </div>
    </nav>
  );
}

function Filter(props) {
  return props.filter.map((colle, index) => (
    <option key={index} value={colle.collection}>
      {colle.collection}
    </option>
  ));
}
function Sort(props) {
  return props.sort.map((z, index) => <option key={index}>{z.Sort_by}</option>);
}

export default Header;
