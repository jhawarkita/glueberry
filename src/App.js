import React from 'react';
import {Provider} from "react-redux";
import Home from "./components/home";
import Home2 from "./components/home2";
import {store, persistor} from "./redux/store";
import DisplayLayout from "./components/displayLayout";
import Favorites from "./components/favorites"
import ProductView from "./components/productView"
import {Route, BrowserRouter} from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import LoginPage from './components/loginPage';
import CreateNewuser from './components/createNewUser';
import { PersistGate } from "redux-persist/integration/react";

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
        <PersistGate persistor={persistor}>
        <Header></Header>
        <Route exact path="/" component={Home}></Route>
        <Route path="/display/:category" component={DisplayLayout}></Route>
        <Route path="/favorites" component={Favorites}></Route>
        <Route path="/productView/:id" component={ProductView}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route path="/login/createNewAccount" component={CreateNewuser}></Route>
        </PersistGate>
        </BrowserRouter>
        <Footer></Footer>
      </Provider>
    )
  }

}

export default App;
