import React from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./signup.css";

axios.defaults.withCredentials = true;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    const { username, email, password } = this.state;
    return (
      <div className="body">
        <center>
          <h1>Sign Up</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              axios
                .post("http://18.191.193.104:4000/user/signup", {
                  username: username,
                  email: email,
                  password: password
                })
                .then(res => {
                  this.props.history.push("/login");
                })
                .catch(err => console.log(err));
            }}
          >
            <div>
              <input
                style={{
                  width: "400px",
                  height: "40px",
                  marginTop: "30px",
                  marginBottom: "30px",
                  borderRadius: "5px"
                }}
                type="username"
                placeholder="Username"
                onChange={this.handleInputValue("username")}
              ></input>
            </div>
            <div>
              <input
                style={{
                  width: "400px",
                  height: "40px",
                  marginBottom: "30px",
                  borderRadius: "5px"
                }}
                type="email"
                placeholder="Email"
                onChange={this.handleInputValue("email")}
              ></input>
            </div>
            <div>
              <input
                style={{
                  width: "400px",
                  height: "40px",
                  marginBottom: "30px",
                  borderRadius: "5px"
                }}
                onChange={this.handleInputValue("password")}
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <button
              style={{
                width: "200px",
                height: "40px",
                margin: "5px",
                borderRadius: "10px",
                backgroundColor: "skyblue"
              }}
              type="submit"
            >
              Create!
            </button>
            <button
              style={{
                width: "200px",
                height: "40px",
                margin: "5px",
                borderRadius: "10px",
                backgroundColor: "skyblue"
              }}
              type="submit"
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              Login Page
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Signup);
