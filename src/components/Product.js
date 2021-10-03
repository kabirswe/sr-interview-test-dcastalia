import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Star from '../assets/star.png'
import StockImage from '../assets/sould-out.png'
import '../styles/Product.scss'

export default class Product extends Component {
  render() {
    const { price, name, rating, image, stock, action } = this.props
    return (
      <div className="product-wrapper">
        <img src={image} alt="" />
        {stock != 'instock' ? (<img className="stock-img" src={StockImage} alt="" />) : '' }
        <p className="name">{name}</p>
        <p className="rating"><img src={Star} alt="star" />{rating} <span>(0)</span></p>
        <div className="price-block">
          <p className="price"><span>BDT</span>{price}</p>
          {action}
        </div>
        {/* {name} - &#36;{price} {quantity ? `x ${quantity}` : null}  */}
      </div>
    )
  }
}

Product.propTypes = {
  price: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.node,
}
