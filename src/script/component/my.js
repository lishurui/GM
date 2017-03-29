import React from 'react'
import { Link } from 'react-router'

class My extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="m-my">
        <div className="my-bg">
          <div className="usertop">
            <div className="deng">
            <Link to='register'>
              <span>登录</span>
              <span>/</span>
              <span>注册</span>
            </Link>
            </div>
            <p className="username">15554095396</p>
          </div>
          <div className="account">
            <div className="balance">
              <i></i>
              <div className="balance-rt">
                <span>账户余额</span>
                <span>00.00</span>
              </div>
            </div>
            <div className="card">
              <i></i>
              <div className="card-rt">
                <span>卡券</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        <ul className="order">
          <li>
            <i></i>
            <b>全部订单</b>
          </li>
          <li>
            <i></i>
            <b>代付款</b>
          </li>
          <li>
            <i></i>
            <b>待收货</b>
          </li>
          <li>
            <i></i>
            <b>已完成</b>
          </li>
        </ul>
        <ul className="menu-list">
          <li>
          <span></span>
          <i>我的团</i>
          </li>
          <li>
          <span></span>
          <i>收货地址</i>
          </li>
          <li>
          <span></span>
          <i>卡券兑换</i>
          </li>
          <li>
          <span></span>
          <i>关于我们</i>
          </li>
          <li>
          <span></span>
          <i>客服中心</i>
          <b>4007889789</b>
          </li>
        </ul>
        <Link to="set">
        <div className="seeting">
          <span></span>
          <i>设置</i>
        </div>
        </Link>
        <div className="biaoyu">
          <img src="http://s1.ucaiyuan.com/h5/1.6.4/images/my/slogan.png" />
        </div>
      </div>
    )
  }
}

export default My
