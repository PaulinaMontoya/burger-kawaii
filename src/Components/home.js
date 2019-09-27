import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import circle from '../imgs/circle.png';
import buttonWaitress from '../imgs/button-waitress.png';
import buttonKitchen from '../imgs/button-chef.png';

class Home extends Component {


    render() {
        return (
            <div align="center">
                <Link to="/intro">
                    <button>Enter</button>
                </Link>
                <p />
  render() {
    return (
      <div className="second">
        <br />
        <p> Choose your position </p>
        <br />
        <div className="secondBody">
            <div className="wiatressBlock">
                <img src={circle} alt="" className="circle"></img>
                <br/>
                <Link to="/menu">
                    <img src={buttonWaitress} alt="" className="button"></img>
                </Link>
            </div>
            
            <div className="chefBlock">
                <img src={circle} alt="" className="circle"></img>
                <br/>
                <Link to="/kitchen">
                    <img src={buttonKitchen} alt="" className="button"></img>
                    {/* <button>Kitchen</button> */}
                </Link>
            </div>
        </div>
    </div> 
    );
  }
}

export default Home;
