import React, { Component } from 'react';
import '../Styles/comandaList.css';
import buttonSendToKitchen from '../imgs/button-sendtokitchen.png';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class ComandaBreakfast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.list
    }
  }
  writeMongo(data, total, table) {
    let dishes = []
    data.map((item) =>
      dishes.push(item.dish)
    )
    let toMongo = {
      table: parseInt(table),
      dishes: dishes,
      total: total,
      active: 1
    }
    //console.log(toMongo)
    /*axios
      .post('https://gdl003-burger-queen-back-end.nienorloth.now.sh/orders', toMongo)
      .then(() => console.log('Uploaded'))
      .catch(err => {
        console.error(err);
      });*/
    //console.log(JSON.stringify(toMongo))
    fetch('https://pacific-sands-67249.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'Authorization': "pM170290aM291287mR270983dP160591",
        //mode: 'no-cors',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(toMongo),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="cointenerComanda">
        <form>
          <p className="numberTable">Number of table</p>
          <input className="inputNumberTable" type="text" id="table" required></input>
          <div>
            <ul>
              {this.props.list.map((item, index) =>
                <li className="listText" key={item._id}>{item.dish}  ${item.price}
                  <button className="buttonDelete" onClick={() => this.props.removeValuesMethod(index)}> - </button>
                </li>
              )}
            </ul>
            <p className="total">Total: ${this.props.total}</p>
          </div>
          <Link to="/kitchen">
            <img src={buttonSendToKitchen} alt="" className="buttonSendToKitchen" onClick={() => this.writeMongo(this.props.list, this.props.total,
              document.getElementById("table").value)}></img>
          </Link>
        </form>
      </div>
    );
  }
}
export default ComandaBreakfast;