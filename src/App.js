import React, { useEffect, useState } from "react";
import "./scss/app.scss";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Sort from "./components/sort/Sort";
import PizzaBlock from "./components/pizzaBlock/PizzaBlock";

const pizzas = [];

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://639576b690ac47c6806b9964.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((item) => {
              return <PizzaBlock key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
