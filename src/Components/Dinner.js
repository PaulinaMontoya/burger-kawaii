import React, { Component } from 'react';
import '../Styles/buttonProduct.css';
import '../Styles/comandaList.css';
import '../Styles/dinnerMenu.css';
import HeaderMenu from './HeaderMenu.js';
import ButtonProduct from './ButtonProduct.js';
import Comanda from './Comanda.js';
import '../Styles/buttonProduct.css';
import Footer from '../Components/Footer.js';

class Dinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0,
      list: []
    };
  }

  componentDidMount() {
    fetch('https://pacific-sands-67249.herokuapp.com/menuDinner', {
      headers: {
        Authorization: "pM170290aM291287mR270983dP160591"
      }
  })
    .then(response => response.json())
    .then(data => {
        this.setState({products: data})
    })
    .catch(error => console.error(error))
}
  //Obtener valores
  getValues = (_id) => {
    const data = this.state.products.find(item => item._id === _id)

    const listConc = this.state.list
    listConc.push({
      dish: data.dish,
      price: data.price
    })

    this.setState({
      total: +this.state.total + +data.price,
      list: listConc
    });
  }

  removeValues = (index) => {
    const listConc = this.state.list
    const price = listConc[index].price
    listConc.splice(index, 1)
    this.setState({
      total: +this.state.total - +price,
      list: listConc
    })
  }

  render() {
    return (
      <div className="headerMenu" >
        <HeaderMenu />
        <div className="cointenerComandaMenuDinner" >
          <div className="buttonAndComanda" >
            <div className="cointenerButtonsDinner">
              <p className="txtDinnerMenu" > Dinner Menu {this.state.count}</p>
              <ButtonProduct getValuesMethod={this.getValues}
                submitValuesMethod={this.submitValues} />
            </div>
            <Comanda submitValuesMethod={this.submitValues}
              removeValuesMethod={this.removeValues}
              total={this.state.total}
              list={this.state.list} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dinner;
