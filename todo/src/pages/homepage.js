import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/login">login</a>
          </li>
          <li>
            <a href="/mypage">mypage</a>
          </li>
          <li>
            <a href="/todopage">todopage</a>
          </li>
          <li>
            <a href="/signup">signup</a>
          </li>
        </ul>

        <center>
          안녕하세여 아래에 이미지 또는 gif를 추가할 예정이랍니다.
        </center>

      </div>
    );
  }
}
export default Homepage;
