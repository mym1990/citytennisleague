import React, { Component } from 'react';
import SFBridge from '../Images/SFBridgeTall.jpg';

const imageStyle = {
    height: '70%',
    borderRadius: '10px 10px 0px 0px'
};
class PriceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
        <div className="priceCard-container">
            <div style={imageStyle}>

                <img className="imageBorder" src={SFBridge} alt="SFBridge"/>
            </div>
            <div style={{color: '#dc7a13'}}>{this.props.city}</div>
            <div>
                <p>MONDAY | OCT 11 | 12:34</p>
            </div>
            <div className="temperatures">
                <h3>36°</h3>
            </div>
        </div>
        )
    }
};

export default PriceCard;