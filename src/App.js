import Header from "./components/Header/header";
import Products from "./components/Products/Products";
import Load from "./components/Loading";
import MyCart from "./components/My Cart/MyCart";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [sortlist] = useState([
    {
      collection: "All-collection",
      Sort_by: "Featured",
    },
    {
      collection: "men's clothing",
      Sort_by: "Featured",
    },
    {
      collection: "jewelery",
      Sort_by: "Best Selling",
    },
    {
      collection: "electronics",
      Sort_by: "Alphabetically, A-Z",
    },
    {
      collection: "women's clothing",
      Sort_by: "Alphabetically, Z-A",
    },
  ]);

  const [selected, setSelected] = useState("All-collection");

  const select = (e) => {
    setSelected(e);

    console.log(selected);

    Filter(e);
  };

  const [productTemp, setListTemp] = useState([]);

  const [product, setList] = useState([]);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((colle) => {
        setList(colle);
        setListTemp(colle);
        setloading(false);
      });
  }, []);

  const Filter = (category) => {
    let temp = productTemp;
    if (!(category == "All-collection")) {
      temp = productTemp.filter((pordu) => pordu.category === category);
      setList(temp);
    } else {
      setList(productTemp);
      console.log(temp);
    }
  };

  return (
    <div className="App">
      <Header sortlist={sortlist} select={select} />
      <Products select={select} product={product} />

      {loading ? <Load /> : <div />}
    </div>
  );
}

export default App;
