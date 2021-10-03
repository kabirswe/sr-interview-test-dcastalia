import React, { Component } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import Header from './Header'
import '../styles/App.scss'

export default class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <ProductList />
        <Cart />
      </div>
    )
  }
}
