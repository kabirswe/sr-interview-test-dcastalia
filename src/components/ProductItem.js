import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Plus from '../assets/plus.png'

export default class ProductItem extends Component {
  render() {
    const { product } = this.props
    const addToCartAction = (
      <button
        onClick={this.props.onAddToCartClicked}
      >
        <img src={Plus} alt="" />
      </button>
    )

    return (
      <>
        <Product
          name={product.name}
          image={product.image_id}
          rating={product.average_rating}
          price={product.price}
          stock={product.stock_status}
          action={addToCartAction}
        />
      </>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
}
