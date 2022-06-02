import Header from "./components/Header/header";
import Products from "./components/Products/Products";
import Load from "./components/Loading";
import MyCart from "./components/My Cart/MyCart";
import { UserContext } from "./components/context/ProdactContex";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { useEffect, useState, useContext } from "react";
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

  const [cart, setcart] = useState([
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
    <Router>
      <div className="App">
        <UserContext.Provider value={setcart}>
          <Header sortlist={sortlist} select={select} />
          <Routes>
            <Route
              path="/"
              element={<Products select={select} product={product} />}
            />
            <Route path="/cart" element={<MyCart cart={cart} />} />
          </Routes>
        </UserContext.Provider>
        {loading ? <Load /> : <div />}
      </div>
    </Router>
  );
}

export default App;
