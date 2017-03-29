require('../style/app.scss')//只写require不需要返回，一旦引进来就把模块打包起来

import React from 'react'
import ReactDOM from 'react-dom'
import { Router,Route, IndexRoute,IndexRedirect,hashHistory} from 'react-router'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import Index from './component/index'
import Home from './component/home'
import Kind from './component/kind'
import Cart from './component/cart'
import My from './component/my'
import Register from './component/register'
import Login from './component/login'
import Set from './component/set'

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Index}>
  		<IndexRedirect to="/home"></IndexRedirect>
  		<Route path="home" component={Home}/>
  		<Route path="kind" component={Kind}/>
  		<Route path="cart" component={Cart}/>
  		<Route path="my" component={My}/>
  	</Route>
    <Route path="register" component={Register}/>
    <Route path="login" component={Login}/>
    <Route path="set" component={Set}/>

  </Router>
  ,
  document.getElementById('root')
)
