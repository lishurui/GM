import React from 'react'
import Carousel from '../../component_dev/carousel/src/index.js'
import Scroller from '../../component_dev/scroller/src'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      bannerlist:  [<div/>],
      ka:[],
      nav:[],
      shop:[],
      attrs:[],
      typeList:[]
    }
  }
  componentWillMount () {
    let url = "http://localhost:3000/home.php";
    let that = this;
     fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
         // console.log(data);
          console.log(data.content[0]);
          let arr = [];
          let kaquan = [];
          for(let i=0;i<3;i++){
             arr.push(<li className="item"><img className="img" src={data.content[0].items[1].data[i].image} /></li>)
          }
          console.log(data.content[0].items[2].data[0].image.image);
          kaquan.push(<img src={data.content[0].items[2].data[0].image.image} / >);
          let newNav =data.content[0].items[3].data.map(val=>{
            return (
            <li>
              <a>
                <img src={val.image}/>
                <span>{val.iconName}</span>
              </a>
            </li>
            )
          });
          console.log(data.content[0].items[4].attributes); 
          
          let attr = [];
          attr.push( <h2><img className="pic" src={data.content[0].items[4].attributes.iconUrl}/><b>{data.content[0].items[4].attributes.title}</b></h2>);
           
          
          let newShop =data.content[0].items[4].data.map(val=>{
            return (
                       <li data-id={val.itemId}>
                      <a>
                        <img src={val.image} />
                      </a>  
                      <h3>{val.title}</h3>
                      <div className="price_wrap">
                        <span>
                          <label>￥</label>
                          {val.price}
                        </span>
                      </div>
                      <span className="limit_count">
                          <em className="limit_num">{val.limitNum}</em>
                      </span>
                      <a className="btnshop"></a>
                     </li>         
            )
          });
          let foodkind=[];

          for(let n=0,i=5;n<=4,i<10;i++,n++){
            
               foodkind.push(
                <div>
                  <h2>{data.content[0].items[i].attributes.title}</h2>
                  <img src={data.content[0].items[i].attributes.image}/>
                  <ul >
                    <li>
                      <a>
                        <img src={data.content[0].items[i].data[n].image} />
                      </a>
                      <h3>
                        {data.content[0].items[i].data[n].title}
                      </h3>
                      <div className="price_wrap">
                        <span>
                          <label>￥</label>
                          {data.content[0].items[i].data[n].price}
                        </span>
                      </div>
                      <a></a>
                    </li>
                  </ul>
                 
                </div>
               )
            console.log(data.content[0].items[i].data[n].title);   
          }
          console.log(foodkind);  
          console.log(kaquan)
          that.setState({
            bannerlist:arr,
            ka:kaquan,
            nav:newNav,
            shop:newShop,
            attrs:attr,
            typeList:foodkind
          })
      })
      .catch(function (err) {
          console.log(err);
      })
  }
  render() {
    return (
      <div className="m-home">
        <header className="search_header">
            <div className="search">
              <i></i>
              车厘子
            </div>
        </header>
        <div className="swiper">
            <Carousel>
              {this.state.bannerlist}
            </Carousel>
        </div>
        <div className="ka">
          <a>
             {this.state.ka}
          </a>
        </div>
        <div className="nav_wrap">
          <ul>
            {this.state.nav}
          </ul>
        </div>
        <div className="hot_product">
          {this.state.attrs}
          <Scroller scrollX={true}>
            <ul>
             {this.state.shop}
            </ul> 
          </Scroller>
        </div>
        <div>
          {this.state.typeList}
        </div>
      </div>
    )
  }
  componentDidMount () {


    }
}

export default Home
