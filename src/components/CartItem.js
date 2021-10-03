import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

export default class CartItem extends Component {
  render() {
    const { price, name, average_rating, image, stock, onRemove } = this.props

    return (
      <Product 
        name={name}
        image={image}
        rating={average_rating}
        price={price}
        stock={stock}
        action={<button onClick={onRemove}>{' X '}</button>}
      />
    )
  }
}

CartItem.propTypes = {
  price: PropTypes.string,
  name: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
}
