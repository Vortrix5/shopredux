import React from "react";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux"
import { createStore } from "redux"
import Home from "./components/Home"
import Items from "./reducers/Items"


const store = createStore(Items,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Home/>
    </Provider>
  );
}
