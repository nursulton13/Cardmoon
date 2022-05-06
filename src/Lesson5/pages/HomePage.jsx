import React, { Component } from 'react'
import './HomePage.css'
import {products} from '../data/products'
import Card from '../comps/card'
import IncDec from '../comps/IncDec'

export class HomePage extends Component {
    constructor() {
      super()
    
      this.state = {
         cart: [],
         value : 1,
      }
    }
  render() {

    const addCart = (product) => {
        this.setState({cart: [...this.state.cart, product]})
    };

    const deleteProduct = (title) => {
          this.setState({
              cart: this.state.cart.filter((product) => (product.title !== title)),
          });
      };

    return (
      <div className='layout'>
          <header className="bg-dark">
              <nav className="navbar navbar-dark bg-dark navbar-expand-sm container position-relative">
                  <a href="#" className="navbar-brand">ESHOP</a>
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <a href="#" className="nav-link">Products</a>
                      </li>
                      <li className="nav-item active">
                          <a href="#" className="nav-link">Link</a>
                      </li>
                  </ul>
                  <a href="#" className="backet-link d-flex align-items-center">
                      <div className="backet p-2">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            <span class="badge badge-secondary">0</span>
                      </div>
                  </a>
              </nav>
          </header>
           
          <main className="py-5 bg-light">
              <div className="container">
                  <div className="row">
                          {products.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                              <Card {...item} addCart = {addCart} />
                            </div>
                          ))}
                     
                  </div>
              </div>
          </main>
          <table className='table table-stripped'>
              <thead>
                <tr>
                    <th className='text-center'>No</th>
                    <th className='text-center'>Name</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Total</th>
                    <th className='text-center'>Action</th>
                    <th className='text-center'>Delete</th>
                </tr>
              </thead>
              <tbody>
                    {this.state.cart.map((product, index) => (
                    <tr>
                        <th className='text-center' scope='row'>{index+1}</th>
                        <td className='text-center'>{product.title}</td>
                        <td className='text-center'>{product.price}$</td>
                        <td className='text-center'>{product.price * this.state.value}$</td>
                        <td>
                            <div className="d-flex justify-content-center align-items-center">
                                <button onClick={() => this.setState({value : this.state.value-1})} type="button"  class="btn btn-primary">-</button>
                                    <span className='px-3'>{this.state.value}</span>
                                <button onClick={() => this.setState({value : this.state.value+1})}  type="button" class="btn btn-success">+</button>
                            </div>
                        </td>
                        <td className='text-center'><button
                            onClick={() => deleteProduct(product.title)}
                            className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
              </tbody>
          </table>
          <div className="d-flex justify-content-evenly total">
            <h2>Total price:</h2>

            <h2>
                {this.state.cart.reduce((total, product) => {
                    return total + product.price* this.state.value;
                },  0)} $
            </h2>
          </div>
          <footer className="py-3">
              <div className="container">
                  Footer
              </div>
          </footer>
          <hr/>
          
          
            
      </div>
    )
  }
}

export default HomePage;