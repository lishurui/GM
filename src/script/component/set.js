import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class Set extends React.Component {
  render () {
    return (
      <div className="set">
      <header className="setHeader">
        <Link to="/my">
          <i></i>
        </Link>
        <p> 设置 </p>
      </header>
      <div className="setContent">
        <h1>账户安全</h1>
        <ul>
          <li>
            <Link to="">
            <i>手机</i>
            <span>1627362732</span>
            </Link>
          </li>
          <li>
          <Link to="">
            <i>邮箱</i>
            <span>23423424</span>
            </Link>
          </li>
          <li>
          <Link to="">
            <i>密码</i>
            <span>修改密码 ></span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="setBtn">退出登录</div>
      </div>

    )
  }
}

export default Set
