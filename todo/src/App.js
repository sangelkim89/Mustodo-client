import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";

import Homepage from "../src/pages/homepage";
import Login from "../src/pages/login";
import Mypage from "../src/pages/mypage";
import Signup from "../src/pages/signup";
import Todopage from "../src/pages/todopage";
import Timer from "../src/pages/timer";
import LoggedInHomepage from "../src/pages/loggedInHomepage";
import NotLoggedIn from "../src/pages/notLoggedIn";

axios.defaults.withCredentials = true;

class App extends React.Component {
  state = {
    isLogin: false
  };
  handleIsLoginChange = () => {
    this.setState({ isLogin: true });
  };
  logOut = () => {
    this.setState({ isLogin: false });
  };
  render() {
    const { isLogin } = this.state;
    return (
      <>
        <Timer />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Homepage isLogin={isLogin} />;
              }}
            />
            />
            <Route
              path="/loggedhome"
              render={() => (
                <LoggedInHomepage
                  isLogin={isLogin}
                  logOut={this.logOut.bind(this)}
                />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <Login handleIsLoginChange={this.handleIsLoginChange} />
              )}
            />
            <Route
              exact
              path="/signup"
              render={() => <Signup isLogin={isLogin} />}
            />
            <Route
              exact
              path="/mypage"
              render={() => (
                <Mypage isLogin={isLogin} logOut={this.logOut.bind(this)} />
              )}
            />
            <Route
              exact
              path="/notloggedin"
              render={() => <NotLoggedIn isLogin={isLogin} />}
            />
            <Route
              exact
              path="/todopage"
              render={() => (
                <Todopage isLogin={isLogin} logOut={this.logOut.bind(this)} />
              )}
            />
            {isLogin ? (
              <Redirect from="/todopage" to="/todopage" />
            ) : (
              <Redirect from="/todopage" to="/notloggedin" />
            )}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
