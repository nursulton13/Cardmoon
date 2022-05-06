import React, { Component } from 'react'

 class card extends Component {
  render() {
    return (
        <div className="card mb-3">
            <img src={this.props.img} alt="" className="card-img-top" />
            <div className="card-body">
                <div className="card-title">{this.props.name}</div>
                <div className="card-subtitle">{this.props.price}$</div>
                <p className="card-text">{this.props.inf}</p>
                <button 
                onClick = {() => this.props.addCart({
                    id:this.props.id,
                    title: this.props.name,
                    price: this.props.price,
                })}
                className="btn btn-outline-secondary w-100">
                    Add to cart
                </button>
            </div>
        </div>
    )
  }
}

export default card