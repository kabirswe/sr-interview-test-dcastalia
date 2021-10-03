import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import '../styles/Cart.scss'
import CartImage from '../assets/cart.png'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions'
import { getTotal, getCartProducts, getCheckoutError, isCheckoutPending } from '../reducers'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartToggle: false
    }
  }

  handleCartAside = () => {
    this.setState({
      cartToggle: !this.state.cartToggle
    })
  }

  render() {
    const { products, total, error, checkoutPending, checkout, removeFromCart } = this.props

    const hasProducts = products.length > 0
    const checkoutAllowed = hasProducts && !checkoutPending

    const nodes = !hasProducts ? (
      <em>Please add some products to cart.</em>
    ) : (
        products.map(product => (
          <CartItem
            name={product.name}
            image={product.image_id}
            rating={product.average_rating}
            price={product.price}
            stock={product.stock_status}
            key={product.id}
            onRemove={() => removeFromCart(product.id)}
          />
        ))
      )

    return (
      <div className="cart-wrapper">
        <div className="cart-icon" onClick={this.handleCartAside}>
          {products.length > 0 ? (<span className="counter">{products.length}</span>) : ''}
          <div className="cart-img">
            <img src={CartImage} alt="" />
          </div>
        </div>
        <div className={this.state.cartToggle ? 'cart-list-block show': 'cart-list-block'}>
          <span className="close" onClick={this.handleCartAside}>close</span>
          <h3>Your Cart </h3>
          <div className="product-list">{nodes}</div>
          <p>Total: {total} BDT</p>
          {/* <button onClick={checkout} disabled={checkoutAllowed ? '' : 'disabled'}>
            Checkout
          </button> */}
          <div style={{ color: 'red' }}>{error}</div>
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
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  total: PropTypes.string,
  error: PropTypes.string,
  checkoutPending: PropTypes.bool,

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
