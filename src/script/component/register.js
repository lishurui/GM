import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class Register extends React.Component {

  render () {
    return (
      <div className="register">
        <header className="resgisterHeader">
          <Link to="/my">
            <i></i>
          </Link>
          <p> 注册 </p>
        </header>
        <div className="registerContent">
          <ul >
          <li className="username">
            <input type="text" placeholder = "请输入手机号"/>
            <i id="delete">  X </i>
          </li>
          <li className="captcha">
            <input   id="yanzheng" placeholder = "请输入验证码"/>
            <div id="yan">发送验证码</div>
          </li>
            <li className="password">
              <input  type="password"  placeholder = "请输入密码(不少于6位)"/>
            </li>
          </ul>
          <div className="btn">
          <span className="fa-btn">验证手机快捷登录</span>
            <span className="login-btn">
                <Link to="/login">
                  已有账号，快捷登录 
                </Link>
            </span>
          </div>
        </div>
      </div>

    )
  }

}

export default Register
