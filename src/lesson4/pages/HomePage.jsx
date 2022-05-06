import React, { Component } from "react";
import Card from "../comps/card";
import { products } from "../data/products";

class HomePage extends Component {
  constructor() {
    this.state = {
      cart: [],
    };
  }

  render() {
    const addCart = (product) => {
      this.setState({ cart: [...this.state.cart, product] });
    };

    const deleteProduct = (title) => {
      this.setState({
        cart: this.state.cart.filter((product) => product.title !== title),
      });
    };

    return (
      <div className="container">
        <ul className="list-group my-3">
          {this.state.cart.reduce((total, product) => {
            return total + product.price;
          }, 0)}
          {this.state.cart.map((product, index) => (
            <li
               key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <p className="mb-0">
                {product.title} ({product.price} $)
              </p>
              <button
                onClick={() => deleteProduct(product.title)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
              <Card {...product} addCart={addCart} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
