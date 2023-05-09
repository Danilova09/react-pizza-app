import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { decrement, increment } from "./redux/slices/filterSlice";

export const SearchContext = React.createContext("");
function App() {
  const [searchValue, setSearchValue] = useState("");

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider> */}
    </div>
  );
}

export default App;
