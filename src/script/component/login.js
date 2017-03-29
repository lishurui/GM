import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class Login extends React.Component {
  render () {
    return(
      <div className="login">
        <header className="loginHeader">
          <Link to="/my">
            <i></i>
          </Link>
          <p> 注册 </p>
        </header>

        <div className="loginContent">
          <ul >
          <li className="username">
            <input placeholder="手机号/邮箱" />
            <i id="delete">  X </i>
          </li>
            <li className="password">
              <input  type="password" placeholder = "密码"/>
            </li>
          </ul>
          <div className="btn">
          <span className="fa-btn">确定</span>
            <span className="register-btn">
                <Link to="/register">
                  注册即送好礼
                </Link>
            </span>
          </div>
        </div>

      </div>
    )
  }
}
export default Login
