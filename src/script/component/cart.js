import React from 'react'
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      hotlist:[<li></li>]
    }
  }



  render() {
    return (
      <div className="m-cart">
        <header>
          购物车
        </header>
        <div className="cart-content">
          <i></i>
          <p>购物车还是空的</p>
          <div className="qu">
            <Link to='home'>
              去逛逛
            </Link>
          </div>
        </div>
        <div className="hotlist">
          <p>今日热销</p>
          <Scroller scrollX={true}>
            <ul>
              {this.state.hotlist}
            </ul>
          </Scroller>
        </div>
      </div>
    )
  }
  componentDidMount () {
    let url='http://localhost:3000/cart.php'
    fetch(url)
    .then(response=>{
      return response.json()
    })
    .then(res=>{
      // console.log(res.content[0].result)
      let arr=res.content[0].result
      console.log(arr)
      let list=arr.map(val=>{
        console.log(val.title)
        return (
          <li>
            <img src={val.image}/>
            <span className="title">{val.title}</span>
            <span className="price">
              <i>￥</i>
              <b> {val.retailPrice}.00</b>
            </span>
            <a>
            <span className="gou"></span>
            </a>
            </li>
        )
      })
      this.setState({
        hotlist:list
      })
    })
  }
}

export default Cart
