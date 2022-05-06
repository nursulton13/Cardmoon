import React, { Component } from 'react'
import Img from '../img/desert1.png'


export class Card extends Component {

  render() {
    return (
        <div className="card" >
            <img src={Img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.text}</p>
                 <div className="d-flex justify-content-between align-items-center">
                    <button onClick={() => 
                    this.props.addCart({
                        title: this.props.title,
                        price: this.props.price,
                    })} 
                    className="btn btn-primary">Buy</button>
                    <div className="mb-0">{this.props.price}$</div>
                </div>
            </div>
        </div>
    )
  }
}

export default Card