import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
//import classicBurger from '../imgs/dinner-classicburger.png';
import menu from "../menuData.js";


class ButtonProductBreakfast extends Component {

  render() {
  
    return (

      <div >
        {menu.breakfast.map((item) =>
          <div className="cointenerButtonProduct" key={item.id}>
            <img src={item.img} alt={item.dish} className="imgButtonProduct"></img>
            <p className="nameButtonProduct">{item.dish}</p>
            <p className="nameButtonProduct">${item.price}</p>
            <button className="buttonPlusProduct" onClick={() => this.props.getValuesMethod(item.id)}>+</button>
          </div>
        )}
      </div>
    )
  }
}

export default ButtonProductBreakfast;