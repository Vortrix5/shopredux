import React from "react";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux"
import { createStore } from "redux"
import Home from "./components/Home"
import Items from "./reducers/Items"


const store = createStore(Items)
store.dispatch({type: "ADD_TO_CART"})
export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Home/>
    </Provider>
  );
}
