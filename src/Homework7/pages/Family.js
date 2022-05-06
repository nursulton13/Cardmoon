import React, { Component } from 'react'
import Like from "../img/like.jpg";
import Delete from "../img/delete.png";
import "./pages.css";

export class Family extends Component {
  render() {
    return (
      <div className="contactCarts">
        {this.props.oilam.map((item, index) => (
          <div key={index} className="cart my-3">
            <div className="cartImg">
              <img src={item.img} />
            </div>
            <div className="cartName text-center">
              <h2>{item.name}</h2>
            </div>
            <div className="cartNumber">
              <h4>{item.number}</h4>
            </div>
            <div className="contactIcon align-items-center">
              <div className="likeContact">
                <img src={Like} />
              </div>
              <div className="text-danger fw-bold">ID:{index + 1}</div>
              <div
                className="deleteContact"
                onClick={() => {
                  this.props.DeletedContact(item);
                }}
              >
                <img src={Delete} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Family