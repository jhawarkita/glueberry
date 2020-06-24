import React from 'react';
import {Provider} from "react-redux";
import Home from "./components/home";
import store from "./redux/store";
import DisplayLayout from "./components/displayLayout";
import Favorites from "./components/favorites"
import ProductView from "./components/productView"
import {Route, BrowserRouter} from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import productView from './components/productView';

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
        <Header></Header>
        <Route exact path="/" component={Home}></Route>
        <Route path="/display" component={DisplayLayout}></Route>
        <Route path="/favorites" component={Favorites}></Route>
        <Route path="/productView/:id" component={ProductView}></Route>
        </BrowserRouter>
        <Footer></Footer>
      </Provider>
    )
  }

}

export default App;
