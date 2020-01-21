import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Homepage from "../src/pages/homepage";
import Login from "../src/pages/login";
import Mypage from "../src/pages/mypage";
import Signup from "../src/pages/signup";
import Todopage from "../src/pages/todopage";

class App extends React.Component {
  state = {
    isLogin: false,
    userinfo: {}
  };
  render() {
    const { isLogin, userinfo } = this.state;
    return (
      <>
        <a href="/">
          <h1>Must to do </h1>
        </a>
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={Login} />
            <Route path="/mypage" exact component={Mypage} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/todopage" exact component={Todopage} />
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
