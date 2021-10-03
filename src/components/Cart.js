import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/Cart.scss'
import CartImage from '../assets/cart.png'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions'
import { getTotal, getCartProducts, getCheckoutError, isCheckoutPending } from '../reducers'

class Cart extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="cart-wrapper">
        <div className="cart-icon">
          {products.length > 0 ? (<span className="counter">{products.length}</span>) : ''}
          <div className="cart-img">
            <img src={CartImage} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  // data
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      price: PropTypes.string,
    }),
  ).isRequired,

  // actions
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    products: getCartProducts(state),
    total: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state),
  }),
  { checkout, removeFromCart },
)(Cart)
