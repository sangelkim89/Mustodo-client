import React from 'react';
import { withRouter, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    const { email, password, mobile, username } = this.state;
    return (
      <div>
        <center>
          <h1>Sign Up</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동 하세요.
              axios
                .post('http://localhost:4000/signup', {
                  email: email,
                  password: password,
                  username: username,
                  mobile: mobile
                })
                .then(res => {
                  this.props.history.push('/');
                })
                .catch(err => console.log(err));
            }}
          >
            <div>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                type="email"
                placeholder="이메일을 입력 해주세요"
                onChange={this.handleInputValue('email')}
              ></input>
            </div>
            <div>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                onChange={this.handleInputValue('password')}
                type="password"
                placeholder="비밀번호를 입력 해주세요"
              ></input>
            </div>
            <div>
              <input
                style={{
                  width: '195px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                onChange={this.handleInputValue('username')}
                placeholder="이름"
              ></input>
              <input
                style={{
                  width: '195px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                type="mobile"
                onChange={this.handleInputValue('mobile')}
                placeholder="전화번호"
              ></input>
            </div>
            <div>
              <Link to="/login">이미 아이디가 있으신가요?</Link>
            </div>
            <button
              style={{
                width: '200px',
                height: '30px',
                margin: '5px',
                borderRadius: '5px',
                backgroundColor: 'skyblue'
              }}
              type="submit"
            >
              회원가입
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Signup);
