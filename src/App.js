import React from "react";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux"
import { createStore } from "redux"
import Home from "./components/Home"
import Items from "./reducers/Items"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Cart from "./components/Cart"


const store = createStore(Items,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
       </Provider>
  );
}
