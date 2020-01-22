import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="linkBox">
          <div className="linkMypage">
            <Link style={{ color: "white" }} to="/">
              Log Out
            </Link>
          </div>
          <div className="linkLoggedHome">
            <Link style={{ color: "white" }} to="/mypage">
              My Page
            </Link>
          </div>
          <div className="linkLoggedHome">
            <Link style={{ color: "white" }} to="/todopage">
              Todo Page
            </Link>
          </div>
        </div>
        <div>
          <img src="http://storage.itdaa.net.s3.amazonaws.com/uploads/froala/file/8070/scm%20%EC%97%85%EB%AC%B4%201.jpg" />
        </div>
      </div>
    );
  }
}
export default Homepage;
