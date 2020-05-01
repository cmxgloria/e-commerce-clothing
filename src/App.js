import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Contact from "./pages/contact/contact.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // open subscribe when user sign in
    // this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
    //   this.setState({
    //     currentUser: user,
    //   });
    //   // console.log(user);
    // });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          // console.log(this.state);
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
  }

  // this will close the subscribetion
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* use redux to deal with currentUser in header component */}
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;