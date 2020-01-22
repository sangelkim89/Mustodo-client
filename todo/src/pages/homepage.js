import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div style={{ padding: "10px", float: "right" }} className="body">
          <Link className="loginRedirectButton" to="/signup">
            Sign up
          </Link>
          <Link
            className="loginRedirectButton"
            onClick={this.props.logOut}
            to="/login"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }
}
export default Homepage;
