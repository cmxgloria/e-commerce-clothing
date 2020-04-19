import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
// import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  // componentDidMount() {
  //   auth.onAuthStateChange(user) => {
  //     this.setState({
  //       currentUser: user
  //     })
  //     console.log(user)
  //   }
  // }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
